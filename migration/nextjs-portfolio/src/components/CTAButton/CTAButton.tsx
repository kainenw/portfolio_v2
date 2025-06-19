'use client';

import React from 'react';
import Link from 'next/link';
import './CTAButton.css';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
  download?: boolean;
  showDownloadIcon?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

function CTAButton({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  download = false,
  showDownloadIcon = false,
  style,
  disabled = false,
  type = 'button',
  ...props
}: CTAButtonProps) {
  const baseClasses = `cta-button ${variant} ${size} ${className}`;

  // If href is provided, render as Link or anchor
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (download || isExternal) {
      return (
        <a
          href={href}
          className={baseClasses}
          aria-label={ariaLabel}
          style={style}
          download={download}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {showDownloadIcon && (
            <span style={{ marginRight: '8px' }} aria-hidden="true">⬇</span>
          )}
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        style={style}
      >
        {showDownloadIcon && (
          <span style={{ marginRight: '8px' }} aria-hidden="true">⬇</span>
        )}
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      style={style}
      disabled={disabled}
      {...props}
    >
      {showDownloadIcon && (
        <span style={{ marginRight: '8px' }} aria-hidden="true">⬇</span>
      )}
      {children}
    </button>
  );
}

export default CTAButton;
