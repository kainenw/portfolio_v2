'use client';

import React from 'react';
import Link from 'next/link';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer-content">
        <nav className="footer-nav" role="navigation" aria-label="Footer navigation">
          <Link href="/" aria-label="Home">Home</Link>
          <Link href="/about" aria-label="About page">About</Link>
          <Link href="/projects" aria-label="Projects portfolio">Projects</Link>
          <Link href="/contact" aria-label="Contact page">Contact</Link>
        </nav>
        
        <div className="social-links" role="group" aria-label="Social media links">
          <a 
            href="https://github.com/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Kainen White's GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Kainen White's LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Kainen White's Twitter profile (opens in new tab)"
          >
            Twitter
          </a>
          <a 
            href="mailto:hello@kainenwhite.com"
            aria-label="Send email to Kainen White"
          >
            Email
          </a>
        </div>
        
        <div className="footer-text">
          <p>&copy; {currentYear} Kainen White. All rights reserved.</p>
          <p>Designed and developed with accessibility in mind.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
