// FILE: context/ThemeContext.js (NEW FILE)
// PURPOSE: Creates a shared context for the theme state.

"use client";

import { createContext } from 'react';

// The context will provide the theme name and a function to change it.
export const ThemeContext = createContext(null);