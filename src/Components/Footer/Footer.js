import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Quick Navigation Links */}
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>

        {/* Social Media Links */}
        <div className="social-links">
          <a 
            href="https://github.com/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com/kainenwhite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter Profile"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="mailto:kainen.white@gmail.com"
            className="social-link"
            aria-label="Email Contact"
          >
            <Mail size={20} />
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
