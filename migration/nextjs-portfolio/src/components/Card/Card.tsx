'use client';

import React from 'react';
import CTAButton from '../CTAButton/CTAButton';
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
            return (
              <CTAButton
                key={idx}
                variant="primary"
                size="medium"
                href={action.href}
                className="card-action-btn"
                aria-label={`${action.label} for ${title}`}
              >
                {action.label}
              </CTAButton>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Card;
