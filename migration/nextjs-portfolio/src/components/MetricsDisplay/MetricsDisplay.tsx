'use client';

import React from 'react';
import './MetricsDisplay.css';

interface Metric {
  label: string;
  value: string | number;
  description?: string;
  type?: 'percentage' | 'number';
}

interface MetricsDisplayProps {
  metrics: Metric[];
  layout?: 'horizontal' | 'vertical';
  variant?: 'default' | 'highlight';
}

function MetricsDisplay({ metrics, layout = 'horizontal', variant = 'default' }: MetricsDisplayProps) {
  const formatValue = (metric: Metric) => {
    if (typeof metric.value === 'number') {
      return metric.type === 'percentage' ? `${metric.value}%` : metric.value.toString();
    }
    return metric.value;
  };

  return (
    <div className={`metrics-display ${layout} ${variant}`} role="group" aria-label="Portfolio metrics">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-item" role="img" aria-label={`${formatValue(metric)} ${metric.label}`}>
          <div className="metric-value">{formatValue(metric)}</div>
          <div className="metric-label">{metric.label}</div>
          {metric.description && (
            <div className="metric-description">{metric.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MetricsDisplay;
