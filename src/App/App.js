import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Homepage from "../Pages/Home/Homepage";
import NotFound from "../Pages/NotFound/NotFound";
import { useState } from "react";
import themeStyles from "../Theme/themeStyles";
import CaseStudyWrapper from "../Pages/Projects/Case Studies/CaseStudyWrapper";

function App() {
  // Detect system preference and set initial theme
  const getInitialTheme = () => {
    const localTheme = localStorage.getItem("__theme");
    if (localTheme) {
      return localTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light'; // Default to light if no preference
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeStyles[theme].backgroundColor);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("__theme")) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("__theme", newTheme);
  }

  usePageTracking(); // Google Analytics

  return (
    <div
      className="App"
      data-theme={theme}
      style={{
        backgroundColor: themeStyles[theme].foreground,
        color: themeStyles[theme].textColor,
      }}
    >
      <Helmet>
        <title>Kainen White | Product & UX Designer</title>
        <meta name="description" content="The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies." />
        
        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content="Kainen White | Product & UX Designer" />
        <meta property="og:description" content="The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kainenwhite.com" />
        <meta property="og:image" content="https://kainenwhite.com/headshot.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Kainen White Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kainen White | Product & UX Designer" />
        <meta name="twitter:description" content="The design portfolio of Kainen White, a product and UX designer creating user-centered digital experiences that drive business growth. View case studies." />
        <meta name="twitter:image" content="https://kainenwhite.com/headshot.webp" />
        <meta name="twitter:image:alt" content="Kainen White - Product & UX Designer" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Kainen White" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kainenwhite.com" />
        
        {/* Structured data for person/professional */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kainen White",
            "jobTitle": "Product & UX Designer",
            "description": "Product and UX designer creating user-centered digital experiences that drive business growth",
            "url": "https://kainenwhite.com",
            "image": "https://kainenwhite.com/headshot.webp",
            "sameAs": [
              "https://www.linkedin.com/in/kainenwhite",
              "https://github.com/kainenwhite"
            ],
            "knowsAbout": [
              "User Experience Design",
              "Product Design",
              "UI Design",
              "Design Systems",
              "User Research",
              "Prototyping",
              "Figma",
              "React",
              "JavaScript"
            ],
            "workLocation": {
              "@type": "Place",
              "name": "Remote"
            }
          })}
        </script>
        
        {/* Website structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Kainen White Portfolio",
            "description": "The design portfolio of Kainen White, a product and UX designer",
            "url": "https://kainenwhite.com",
            "author": {
              "@type": "Person",
              "name": "Kainen White"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://kainenwhite.com/projects?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      {/* Skip Links for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <a href="#footer" className="skip-link">Skip to footer</a>

      <Header theme={theme} changeTheme={changeTheme} />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/projects/:caseStudyId" element={<CaseStudyWrapper />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/" element={<Homepage theme={theme} />} />
          {/* 404 Catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
}

export default App;
