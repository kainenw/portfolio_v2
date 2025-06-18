import React from 'react';
import './MetricsDisplay.css';

function MetricsDisplay({ metrics, layout = 'horizontal', variant = 'default' }) {
  if (!metrics || !Array.isArray(metrics)) {
    return null;
  }

  const getIcon = (iconType) => {
    const iconMap = {
      increase: '📈',
      users: '👥',
      target: '🎯',
      award: '🏆',
      default: '📈'
    };
    
    const iconText = iconMap[iconType] || iconMap.default;
    return <span style={{ fontSize: '1.5rem' }}>{iconText}</span>;
  };

  const formatMetric = (value, type) => {
    if (type === 'percentage') {
      return `+${value}%`;
    }
    if (type === 'number') {
      return value.toLocaleString();
    }
    if (type === 'currency') {
      return `$${value.toLocaleString()}`;
    }
    return value;
  };

  return (
    <div className={`metrics-display ${layout} ${variant}`}>
      {metrics.map((metric, index) => (
        <div key={index} className="metric-item">
          <div className="metric-icon">
            {getIcon(metric.icon)}
          </div>
          <div className="metric-content">
            <div className="metric-value">
              {formatMetric(metric.value, metric.type)}
            </div>
            <div className="metric-label">
              {metric.label}
            </div>
            {metric.description && (
              <div className="metric-description">
                {metric.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MetricsDisplay;
