import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import CTAButton from '../CTAButton/CTAButton';

function Card({ image, title, description, actions = [], dataTestId }) {
  const navigate = useNavigate();

  return (
    <div className="project-card" data-testid={dataTestId}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions">
          {actions.map((action, idx) => {
            const isInternal = action.href.startsWith('/') && !action.newTab;
            if (isInternal) {
              return (
                <CTAButton
                  key={idx}
                  variant="primary"
                  size="medium"
                  onClick={() => navigate(action.href)}
                  className="card-action-btn"
                >
                  {action.label}
                </CTAButton>
              );
            }
            return (
              <CTAButton
                key={idx}
                href={action.href}
                variant="secondary"
                size="medium"
                target={action.newTab ? '_blank' : undefined}
                rel={action.newTab ? 'noopener noreferrer' : undefined}
                className="card-action-btn"
              >
                {action.label}
              </CTAButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
