import { useState } from "react";
import "./Header.css";
/* import "./HeaderStyles" */
import { NavLink } from "react-router-dom";
import themes from "../../Theme/themes";

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
        color: "inherit",
        position: "fixed",
        left: "50%",
        transform: "translate(-50%)",
        maxWidth: "60%",
        minWidth: "60%",
        border: "1px solid var(--gray)",
        borderRadius: "20px",
        boxShadow: "10px 10px 60px black",
        padding: "0.5rem",
        fontSize: "calc(10px + 2vmin)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
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