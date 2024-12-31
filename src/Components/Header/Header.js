import { useState } from "react";
import "./Header.css";
/* import "./HeaderStyles" */
import { NavLink } from "react-router-dom";
import themes from "../../Theme/themeStyles";

function Header(props) {
  const [page, setPage] = useState(null);
  const theme = props.theme;

  const handleClick = (e) => {
    page && page.classList.remove("active");
    setPage(e.target);
    e.target.classList.add("active");
  };

  return (
    <header
      className="App-header"
      style={{
        backgroundColor: themes[theme].background,
      }}
    >
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

export default Header;
