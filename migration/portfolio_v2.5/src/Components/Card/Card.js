import React from 'react';
import { useRouter } from 'next/router';
import './Card.css';
import CTAButton from '../CTAButton/CTAButton';

function Card({ image, title, description, actions = [], dataTestId }) {
  const router = useRouter();

  return (
    <article className="project-card" data-testid={dataTestId}>
      <div className="card-image">
        <img src={image} alt={`${title} project screenshot`} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions" role="group" aria-label={`Actions for ${title}`}>
          {actions.map((action, idx) => {
            const isInternal = action.href.startsWith('/') && !action.newTab;
            if (isInternal) {
              return (
                <CTAButton
                  key={idx}
                  variant="primary"
                  size="medium"
                  onClick={() => router.push(action.href)}
                  aria-label={`${action.label} for ${title}`}
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
                aria-label={`${action.label} for ${title}${action.newTab ? ' (opens in new tab)' : ''}`}
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