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
    return (
      <a 
        href={href}
        className={baseClasses}
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
