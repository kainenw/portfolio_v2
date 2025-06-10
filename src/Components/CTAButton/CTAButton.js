import React from 'react';
import './CTAButton.css';

function CTAButton({ 
  children, 
  variant = 'primary', // 'primary' or 'secondary'
  size = 'medium', // 'small', 'medium', 'large'
  onClick, 
  href,
  disabled = false,
  className = '',
  ...props 
}) {
  const baseClasses = `cta-button cta-${variant} cta-${size} ${className}`;
  
  if (href) {
    const handleLinkClick = (e) => {
      // Prevent full page reload for internal links
      if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http')) {
        e.preventDefault();
        if (typeof window !== 'undefined') {
          window.history.pushState({}, '', href);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }
      if (typeof onClick === 'function') onClick(e);
    };
    return (
      <a 
        href={href}
        className={baseClasses}
        onClick={handleLinkClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default CTAButton;
