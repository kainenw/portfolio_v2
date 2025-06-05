import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import About from "../Pages/About";
/* import Blog from "../Pages/Blog"; */
import Projects from "../Pages/Projects";
/* import Resources from "../Pages/Resources"; */
import Contact from "../Pages/Contact";
import Homepage from "../Pages/Homepage";
/* import ThemeButton from "../ThemeButton/ThemeButton"; */
import { useState } from "react";
import themeStyles from "../Theme/themeStyles";
import CaseStudyWrapper from "../Pages/CaseStudyWrapper";

function App() {
  /* if no local theme, set as "dark" */
  !localStorage.getItem("__theme") && localStorage.setItem("__theme", "dark");
  /* get theme */
  let localTheme = localStorage.getItem("__theme");
  const [theme, setTheme] = useState(localTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("__theme", newTheme);
  }

  return (
    <div
      className="App"
      data-theme={theme}
      style={{
        backgroundColor: themeStyles[theme].foreground,
        color: themeStyles[theme].textColor,
      }}
    >
      <main>
        <Header theme={theme} changeTheme={changeTheme} />
        <Routes>
          {/* <Route path="/resources" element={<Resources theme={theme} />} /> */}
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/projects/:caseStudyId" element={<CaseStudyWrapper />} />
          <Route path="/about" element={<About theme={theme} />} />
          {/* <Route path="/blog" element={<Blog theme={theme} />} /> */}
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/" element={<Homepage theme={theme} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
