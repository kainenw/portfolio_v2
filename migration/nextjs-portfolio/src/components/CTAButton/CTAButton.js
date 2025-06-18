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
  download = false,
  showDownloadIcon = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) {
  const baseClasses = `cta-button cta-${variant} cta-${size} ${className}`;

  // Download Resume functionality
  const handleDownload = (e) => {
    // If download prop is set, handle download logic
    if (download) {
      e.preventDefault();
      // Google Analytics tracking for resume downloads
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'resume_download', {
          event_category: 'Engagement',
          event_label: 'Resume Download',
          value: 1
        });
      }
      // Create download link
      const link = document.createElement('a');
      link.href = href || '/KainenWhite_Resume.pdf';
      link.download = 'KainenWhite_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (typeof onClick === 'function') onClick(e);
      return;
    }
    // Otherwise, handle as normal link
    if (href && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('http')) {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
    if (typeof onClick === 'function') onClick(e);
  };

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={handleDownload}
        download={download ? 'KainenWhite_Resume.pdf' : undefined}
        aria-label={ariaLabel || (download ? 'Download Kainen White Resume PDF' : undefined)}
        aria-describedby={ariaDescribedBy}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        target={href.startsWith('http') ? '_blank' : undefined}
        {...props}
      >
        {showDownloadIcon && <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} aria-hidden="true">⬇</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={download ? handleDownload : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      type="button"
      {...props}
    >
      {showDownloadIcon && <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }} aria-hidden="true">⬇</span>}
      {children}
    </button>
  );
}

export default CTAButton;
