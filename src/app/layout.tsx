"use client";

import React, { useState, useEffect } from 'react';
import '../index.css';
import './globals.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import themeStyles from '../Theme/themeStyles';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const getInitialTheme = () => {
    const localTheme = typeof window !== 'undefined' ? localStorage.getItem('__theme') : null;
    if (localTheme) {
      return localTheme;
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeStyles[theme].backgroundColor);
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('__theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [theme]);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('__theme', newTheme);
    }
  };

  return (
    <html lang="en" data-theme={theme}>
      <body
        className="App"
        style={{
          backgroundColor: themeStyles[theme].foreground,
          color: themeStyles[theme].textColor,
        }}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
        <Header theme={theme} changeTheme={changeTheme} />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
