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
  /* if no local theme, set as "dark" */
  !localStorage.getItem("__theme") && localStorage.setItem("__theme", "dark");
  /* get theme */
  let localTheme = localStorage.getItem("__theme");
  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeStyles[theme].backgroundColor);
    }
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
        {/* Add other global meta tags here if needed */}
      </Helmet>
      <Header theme={theme} changeTheme={changeTheme} />
      <main id="main-content">
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
