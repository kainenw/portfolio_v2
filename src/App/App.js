import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header"
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Projects from "../Pages/Projects";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useState } from "react";

function App() {

  /* move this once redux store is built */
  const [theme, setTheme] = useState(localStorage.getItem("__theme"));
  if (!theme) {
    setTheme("dark")
    localStorage.setItem("__theme", "dark");
  }

  const changeTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next)
    localStorage.setItem("__theme", theme);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/resources" element={<Resources theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/blog" element={<Blog theme={theme} />} />
        <Route path="/" element={<About theme={theme} />} />
      </Routes>
      <button onClick={changeTheme}></button>
    </div>
  );
}

export default App;
