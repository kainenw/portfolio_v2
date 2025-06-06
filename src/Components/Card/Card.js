import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

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
                <button
                  key={idx}
                  className="card-action-btn"
                  onClick={() => navigate(action.href)}
                >
                  {action.label}
                </button>
              );
            }
            return (
              <a
                key={idx}
                href={action.href}
                className="card-action-btn"
                target={action.newTab ? '_blank' : undefined}
                rel={action.newTab ? 'noopener noreferrer' : undefined}
              >
                {action.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
