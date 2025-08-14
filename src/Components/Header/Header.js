"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FolderOpen, User, Mail } from 'lucide-react'; // Import Mail icon
import CTAButton from '../CTAButton/CTAButton'; // Import CTAButton component
import './Header.css';

function Header(props) {
  const { theme, changeTheme } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    changeTheme(nextTheme);
    localStorage.setItem('__theme', nextTheme);
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <header className="App-header" data-theme={theme} role="banner">
      {/* Logo/Brand - Directly in App-header */}
      <Link
        href="/"
        className="header-logo header-nav-item"
        aria-label="Home - Kainen White Portfolio"
      >
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="logo-text">KW</span>
        </span>
      </Link>

      {/* Navigation Links - Directly in App-header */}
      <nav role="navigation" aria-label="Main navigation" style={{ display: 'contents' }}>
        <Link
          href="/projects"
          className={`header-nav-item${pathname === '/projects' ? ' active' : ''}`}
          aria-label="View projects portfolio"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FolderOpen size={20} style={{ marginBottom: '2px' }} aria-hidden="true" />
            <span className="nav-link-text">projects</span>
          </span>
        </Link>
        <Link
          href="/about"
          className={`header-nav-item${pathname === '/about' ? ' active' : ''}`}
          aria-label="Learn about Kainen White"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <User size={20} style={{ marginBottom: '2px' }} aria-hidden="true" />
            <span className="nav-link-text">about</span>
          </span>
        </Link>
      </nav>

      {/* Contact CTA Button - Directly in App-header */}
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

      {/* Theme Toggle Button - Directly in App-header */}
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

export default Header;