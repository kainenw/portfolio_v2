import React from 'react';
import './Card.css';

function Card({ image, title, description, actions = [] }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions">
          {actions.map((action, idx) => (
            <a
              key={idx}
              href={action.href}
              className="card-action-btn"
              target={action.newTab ? '_blank' : undefined}
              rel={action.newTab ? 'noopener noreferrer' : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
