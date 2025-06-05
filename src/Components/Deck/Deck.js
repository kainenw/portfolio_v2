import React from 'react';
import Card from '../Card/Card';
import './Deck.css';


function Deck({ items, actionType }) {
  // actionType: string (comma-separated) or array
  // e.g. 'caseStudy,demo' or ['caseStudy', 'demo']
  const getActionLabel = (type) => {
    if (type === 'demo') return 'View Demo';
    if (type === 'github') return 'View Code';
    if (type === 'caseStudy') return 'Case Study';
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getNewTab = (type) => {
    if (type === 'caseStudy') return false;
    return true;
  };

  // Normalize actionType to array
  let actionTypes = [];
  if (Array.isArray(actionType)) {
    actionTypes = actionType;
  } else if (typeof actionType === 'string') {
    actionTypes = actionType.split(',').map(s => s.trim()).filter(Boolean);
  }

  return (
    <div className="deck-grid">
      {items.map((item, idx) => {
        let actions = [];
        if (item.links) {
          actionTypes.forEach(type => {
            if (item.links[type]) {
              actions.push({
                label: getActionLabel(type),
                href: item.links[type],
                newTab: getNewTab(type)
              });
            }
          });
        }
        return (
          <Card
            key={idx}
            {...item}
            actions={actions}
          />
        );
      })}
    </div>
  );
}

export default Deck;
