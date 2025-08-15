"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import './Card.css';
import CTAButton from '../CTAButton/CTAButton';

function Card({ image = '', images = [], title = '', description = '', actions = [], dataTestId }) {
  const router = useRouter();

  // Ensure we always have a valid image src to avoid React/Next dev errors on <img>
  const firstFromArray = Array.isArray(images) && images.length > 0 ? images[0] : '';
  const displayImage = image || firstFromArray || '/window.svg'; // placeholder in /public

  return (
    <article className="project-card" data-testid={dataTestId}>
      <div className="card-image">
        <img src={displayImage} alt={title ? `${title} project screenshot` : 'Project screenshot'} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions" role="group" aria-label={`Actions for ${title}`}>
          {Array.isArray(actions) && actions.map((action, idx) => {
            if (!action || typeof action.href !== 'string' || typeof action.label !== 'string') return null;
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