import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import About from "../Pages/About";
/* import Blog from "../Pages/Blog"; */
import Projects from "../Pages/Projects";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
/* import ThemeButton from "../ThemeButton/ThemeButton"; */
import { useState } from "react";
import ThemeMenu from "../Theme/ThemeMenu";
import themes from "../Theme/themes";

function App() {
  /* if no local theme, set as "dark" */
  !localStorage.getItem("__theme") && localStorage.setItem("__theme", "dark");
  /* get theme */
  let localTheme = localStorage.getItem("__theme");
  const [theme, setTheme] = useState(localTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("__theme", theme);
  }

  return (
    <div
      className="App"
      data-theme={theme}
      style={{
        backgroundColor: themes[theme].foreground,
        color: themes[theme].textColor,
        borderLeft: "1px solid #404040",
        borderRight: "1px solid #404040",
        padding: "1.5rem",
        margin: "0 auto",
        maxWidth: "1000px",
        minWidth: "500px",
        height: "100%",
        top: "0",
        textAlign: "center",
        }}
      >
      <Header theme={theme} />
      <main
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "5rem",
        }}>
      <Routes>
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/resources" element={<Resources theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        {/* <Route path="/blog" element={<Blog theme={theme} />} /> */}
        <Route path="/" element={<About theme={theme} />} />
      </Routes>
      <ThemeMenu theme={theme} changeTheme={changeTheme}>toggle theme</ThemeMenu>
      </main>
    </div>
  );
}

export default App;
