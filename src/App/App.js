import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import About from "../Pages/About";
<<<<<<< HEAD
/* import Blog from "../Pages/Blog"; */
=======
import Blog from "../Pages/Blog";
>>>>>>> implement_css-in-js
import Projects from "../Pages/Projects";
import Resources from "../Pages/Resources";
import Contact from "../Pages/Contact";
/* import ThemeButton from "../ThemeButton/ThemeButton"; */
import { useState } from "react";
import ThemeMenu from "../Theme/ThemeMenu";
<<<<<<< HEAD
import themeStyles from "../Theme/themeStyles";
=======
>>>>>>> implement_css-in-js

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
<<<<<<< HEAD
    <div
      className="App"
      data-theme={theme}
      style={{
        backgroundColor: themeStyles[theme].foreground,
        color: themeStyles[theme].textColor,
        }}
      >
      <Header theme={theme} />
      <main>
=======
    <div className="App" data-theme={theme}>
      <Header />
>>>>>>> implement_css-in-js
      <Routes>
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/resources" element={<Resources theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
<<<<<<< HEAD
        {/* <Route path="/blog" element={<Blog theme={theme} />} /> */}
        <Route path="/" element={<About theme={theme} />} />
      </Routes>
      <ThemeMenu theme={theme} changeTheme={changeTheme}>toggle theme</ThemeMenu>
      </main>
=======
        <Route path="/blog" element={<Blog theme={theme} />} />
        <Route path="/" element={<About theme={theme} />} />
      </Routes>
      <ThemeMenu theme={theme} changeTheme={changeTheme}>toggle theme</ThemeMenu>
>>>>>>> implement_css-in-js
    </div>
  );
}

export default App;
