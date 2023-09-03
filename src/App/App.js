import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Projects from "../Pages/Projects";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
/* import ThemeButton from "../ThemeButton/ThemeButton"; */
import { useState } from "react";
import ThemeMenu from "../Theme/ThemeMenu";

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
    <div className="App" data-theme={theme}>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/resources" element={<Resources theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/blog" element={<Blog theme={theme} />} />
        <Route path="/" element={<About theme={theme} />} />
      </Routes>
      <ThemeMenu theme={theme} changeTheme={changeTheme}>toggle theme</ThemeMenu>
    </div>
  );
}

export default App;
