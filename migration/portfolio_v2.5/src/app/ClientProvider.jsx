// FILE: components/ClientProvider.jsx (UPDATED)
// PURPOSE: Manages theme state and provides it to children via Context.

"use client";

import React, { useEffect, useState } from "react";
import usePageTracking from "../hooks/usePageTracking"; // Adjust path if needed
import themeStyles from "../Theme/themeStyles"; // Adjust path if needed
import { ThemeContext } from '../context/ThemeContext'; // Import the new context

export default function ClientProvider({ children }) {
  const [theme, setTheme] = useState("light");
  usePageTracking();

  useEffect(() => {
    const localTheme = localStorage.getItem("__theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeStyles[theme].backgroundColor);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem("__theme")) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("__theme", newTheme);
  };

  // The 'cloneElement' logic is removed.
  // Instead, we wrap the children in the ThemeContext.Provider.
  // Any component inside this provider can now access the theme state.
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}