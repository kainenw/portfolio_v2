'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

function Header() {
  const pathname = usePathname();

  return (
    <header className="App-header" role="banner">
      {/* Logo/Brand */}
      <Link 
        href="/" 
        className={`header-logo header-nav-item ${pathname === '/' ? 'active' : ''}`}
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
          className={`header-nav-item ${pathname === '/projects' ? 'active' : ''}`}
          aria-label="View projects portfolio"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span aria-hidden="true">📁</span>
            <span className="nav-link-text">projects</span>
          </span>
        </Link>
        <Link 
          href="/about" 
          className={`header-nav-item ${pathname === '/about' ? 'active' : ''}`}
          aria-label="Learn about Kainen White"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span aria-hidden="true">👤</span>
            <span className="nav-link-text">about</span>
          </span>
        </Link>
        <Link 
          href="/contact" 
          className={`header-nav-item ${pathname === '/contact' ? 'active' : ''}`}
          aria-label="Contact Kainen White for opportunities"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span aria-hidden="true">✉️</span>
            <span className="nav-link-text">contact</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
