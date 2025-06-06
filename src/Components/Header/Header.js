import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FolderOpen, User, Mail } from 'lucide-react'; // Import Mail icon
import './Header.css';

function Header(props) {
  const { theme, changeTheme } = props;
  const navigate = useNavigate(); // Instantiate useNavigate

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    changeTheme(nextTheme);
    localStorage.setItem('__theme', nextTheme);
  };

  const handleContactClick = () => { // Handler for contact button
    navigate('/contact');
  };

  // NavLink handles active class automatically
  return (
    <header className="App-header" data-theme={theme}>
      {/* Logo/Brand - Directly in App-header */}
      <Link to="/" className="header-logo header-nav-item">
        <span className="logo-text">KW</span>
      </Link>

      {/* Navigation Links - Directly in App-header */}
      <NavLink to="/projects" className="header-nav-item">
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FolderOpen size={20} style={{ marginBottom: '2px' }} />
          <span className="nav-link-text">projects</span>
        </span>
      </NavLink>
      <NavLink to="/about" className="header-nav-item">
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <User size={20} style={{ marginBottom: '2px' }} />
          <span className="nav-link-text">about</span>
        </span>
      </NavLink>

      {/* Contact CTA Button - Directly in App-header */}
      <button onClick={handleContactClick} className="header-cta header-nav-item">
        <Mail size={20} className="contact-icon" /> 
        <span className="contact-text">Contact Me</span>
      </button>

      {/* Theme Toggle Button - Directly in App-header */}
      <button
        className="ThemeMenu header-nav-item"
        onClick={handleThemeToggle}
        aria-label="Change Theme"
      >
        <img
          src={require(`../../img/themed/${theme}/theme-icon.webp`)} // Changed .png to .webp
          alt="toggle theme button"
          loading="lazy"
        />
      </button>
    </header>
  );
}

export default Header;