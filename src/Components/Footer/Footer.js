import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div className="footer-content">
        {/* Quick Navigation Links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>

        {/* Social Media Links */}
        <div className="social-links" role="list" aria-label="Social media links">
          <a 
            href="https://github.com/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit Kainen White's GitHub profile (opens in new tab)"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a 
            href="https://linkedin.com/in/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit Kainen White's LinkedIn profile (opens in new tab)"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
          <a 
            href="https://twitter.com/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Visit Kainen White's Twitter profile (opens in new tab)"
          >
            <Twitter size={20} aria-hidden="true" />
          </a>
          <a 
            href="mailto:kainen.white@gmail.com"
            className="social-link"
            aria-label="Send email to Kainen White"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="copyright">
          <p>&copy; {currentYear} Kainen White. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
