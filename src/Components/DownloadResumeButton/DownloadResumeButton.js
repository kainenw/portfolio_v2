import React from 'react';
import { Download } from 'lucide-react';
import './DownloadResumeButton.css';

function DownloadResumeButton({ variant = 'primary', className = '', style = {} }) {
  const handleDownload = () => {
    // Google Analytics tracking for resume downloads
    if (window.gtag) {
      window.gtag('event', 'resume_download', {
        event_category: 'Engagement',
        event_label: 'Resume Download',
        value: 1
      });
    }

    // Create download link
    const link = document.createElement('a');
    link.href = '/KainenWhite_Resume.pdf';
    link.download = 'KainenWhite_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonClass = `download-resume-btn ${variant} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={handleDownload}
      style={style}
      aria-label="Download Resume PDF"
    >
      <Download size={20} style={{ marginRight: '0.5rem' }} aria-hidden="true" />
      Download Resume
    </button>
  );
}

export default DownloadResumeButton;
