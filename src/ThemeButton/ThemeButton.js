import { useEffect } from 'react';
import './ThemeButton.css'

function ThemeButton() {

  let currentTheme;
  useEffect(() => {
    currentTheme = localStorage.getItem("__theme");
    if (!currentTheme) {
        currentTheme = "dark";
    }
  
    localStorage.setItem("__theme", currentTheme);
    document.body.setAttribute("data-theme", currentTheme);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    /* icon-swapping */
    currentTheme = currentTheme == "dark" ? "light" : "dark"
    localStorage.setItem("__theme", currentTheme)
    document.body.setAttribute("data-theme", currentTheme);
    const themed_icons = document.getElementsByClassName("themed_icons");
    for (let icon in themed_icons) {
      const src = icon.value + currentTheme + ".png"
      icon.src(require(src));
    }
  }

  return <button onClick={handleClick}>Toggle Theme</button>
}

export default ThemeButton;