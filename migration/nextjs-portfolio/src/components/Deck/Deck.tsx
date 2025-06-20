'use client';

import React from 'react';
import Card, { CardAction } from '../Card/Card';
import './Deck.css';

interface DeckProps {
  title?: string;
  description?: string;
  items: Array<{
    id: string;
    title: string;
    description: string;
    slug?: string;
    image?: string;
    images?: string[];
    links?: {
      [key: string]: string;
    };
  }>;
  actionType: string;
  analytics?: {
    category: string;
    action: string;
  };
}

function Deck({ title, description, items, actionType, analytics }: DeckProps) {
  // Convert actionType string to array - handle comma-separated values like original
  const actionTypes = actionType.split(/[,\s]+/).map(type => type.trim()).filter(Boolean);

  const getActionLabel = (type: string) => {
    switch (type) {
      case 'caseStudy': return 'Case Study';
      case 'demo': return 'View Demo';
      case 'github': return 'View Code';
      default: return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  const getNewTab = (type: string) => {
    return type !== 'caseStudy';
  };

  const getActionUrl = (type: string, item: DeckProps['items'][0]) => {
    if (type === 'caseStudy' && item.slug) {
      return `/projects/${item.slug}`;
    }
    return item.links?.[type] || '#';
  };

  return (
    <div>
      {/* Section Header - only show if title or description provided */}
      {(title || description) && (
        <>
          {title && <h2 className="left-right-padding">{title}</h2>}
          {description && <p className="left-right-padding">{description}</p>}
        </>
      )}
      
      {/* Cards Grid */}
      <div className="deck-grid" role="list">
        {items.map((item) => {
          const actions: CardAction[] = [];
          
          if (item.links) {
            actionTypes.forEach(type => {
              const url = getActionUrl(type, item);
              if (url !== '#') {
                actions.push({
                  label: getActionLabel(type),
                  href: url,
                  newTab: getNewTab(type)
                });
              }
            });
          }
          
          // Generate a test id based on the project title (kebab-case, remove special chars)
          const baseId = item.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          
          // For development tab, add suffix if needed
          let dataTestId = `project-${baseId}`;
          if (item.title.toLowerCase().includes('portfolio v2') && actionType === 'github') {
            dataTestId = 'project-portfolio-v2-(development)';
          }
          if (item.title.toLowerCase().includes('portfolio v2') && actionType !== 'github') {
            dataTestId = 'project-portfolio-v2';
          }
          
          return (
            <Card
              key={item.id}
              image={item.image || (item.images && item.images[0])}
              title={item.title}
              description={item.description}
              actions={actions}
              dataTestId={dataTestId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Deck;
