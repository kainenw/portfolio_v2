'use client';

import React from 'react';
import './Card.css';

export interface CardAction {
  label: string;
  href: string;
  newTab: boolean;
}

interface CardProps {
  image?: string;
  images?: string[];
  title: string;
  description: string;
  actions?: CardAction[];
  dataTestId?: string;
  analytics?: {
    category: string;
    action: string;
  };
}

function Card({ image, images, title, description, actions = [], dataTestId, analytics }: CardProps) {
  // Get the display image - prioritize image prop, then first image from images array
  const displayImage = image || (images && images[0]) || '/img/projects/placeholder.webp';

  return (
    <article className="project-card" data-testid={dataTestId}>
      <div className="card-image">
        <img 
          src={displayImage} 
          alt={`${title} project screenshot`} 
          width={400}
          height={250}
          loading="lazy"
        />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions" role="group" aria-label={`Actions for ${title}`}>
          {actions.map((action, idx) => {
            if (action.newTab) {
              return (
                <a
                  key={idx}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-btn cta-button cta-primary cta-medium"
                  aria-label={`${action.label} for ${title}`}
                >
                  {action.label}
                </a>
              );
            } else {
              return (
                <a
                  key={idx}
                  href={action.href}
                  className="card-action-btn cta-button cta-primary cta-medium"
                  aria-label={`${action.label} for ${title}`}
                >
                  {action.label}
                </a>
              );
            }
          })}
        </div>
      </div>
    </article>
  );
}

export default Card;
