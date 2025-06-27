"use client"; // The Header must be a client component to use context and handle clicks.

import React, { useContext } from 'react';
import Link from 'next/link'; // Replace react-router-dom imports
import { FolderOpen, User, Mail } from 'lucide-react'; // Import Mail icon
import CTAButton from '../CTAButton/CTAButton'; // Import CTAButton component
import { ThemeContext } from '../../context/ThemeContext'; // Adjust path
import './Header.css';

export default function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  // Handle the case where context is not yet available
  if (!theme) {
    return null; // Or return a loading skeleton for the header
  }

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <header className="App-header" data-theme={theme} role="banner">
      {/* Logo/Brand */}
      <Link 
        href="/" 
        className="header-logo header-nav-item"
        aria-label="Home - Kainen White Portfolio"
      >
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="logo-text">KW</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav role="navigation" aria-label="Main navigation" style={{ display: 'contents' }}>
        <Link 
          href="/projects" 
          className="header-nav-item"
          aria-label="View projects portfolio"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FolderOpen size={20} style={{ marginBottom: '2px' }} aria-hidden="true" />
            <span className="nav-link-text">projects</span>
          </span>
        </Link>
        <Link 
          href="/about" 
          className="header-nav-item"
          aria-label="Learn about Kainen White"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <User size={20} style={{ marginBottom: '2px' }} aria-hidden="true" />
            <span className="nav-link-text">about</span>
          </span>
        </Link>
      </nav>

      {/* Contact CTA Button */}
      <CTAButton 
        variant="primary" 
        size="medium" 
        className="header-nav-item" 
        onClick={handleContactClick}
        aria-label="Contact Kainen White for opportunities"
      >
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Mail size={20} className="contact-icon" aria-hidden="true" />
          <span className="contact-text">contact</span>
        </span>
      </CTAButton>

      {/* Theme Toggle Button */}
      <button
        className="ThemeMenu header-nav-item"
        onClick={handleThemeToggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        aria-pressed={theme === 'dark'}
        type="button"
      >
        <img
          src={require(`../../img/themed/${theme}/theme-icon.webp`)} // Changed .png to .webp
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
        <span className="sr-only">
          Current theme: {theme === 'dark' ? 'Dark' : 'Light'} mode
        </span>
      </button>
    </header>
  );
}