import { useState } from "react";
import "./Header.css";
/* import "./HeaderStyles" */
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import themes from "../../Theme/themeStyles";

function Header(props) {
  const [page, setPage] = useState(null);
  const theme = props.theme;
=======

function Header() {
  const [page, setPage] = useState(null);
>>>>>>> implement_css-in-js

  const handleClick = (e) => {
    page && page.classList.remove("active");
    setPage(e.target);
    e.target.classList.add("active");
  };

  return (
<<<<<<< HEAD
    <header
      className="App-header"
      style={{
        backgroundColor: themes[theme].background,
      }}
    >
=======
    <header className="App-header">
>>>>>>> implement_css-in-js
      <NavLink to="/" onClick={handleClick}>
        about
      </NavLink>
      {/*<nav onClick={handleClick}>blog</nav>*/}
      <NavLink to="/projects" onClick={handleClick}>
        projects
      </NavLink>
      <NavLink to="/resources" onClick={handleClick}>
        resources
      </NavLink>
      <NavLink to="/contact" onClick={handleClick}>
        contact
      </NavLink>
    </header>
  );
}

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> implement_css-in-js
