import { useState } from "react";
import "./Header.css";
/* import "./HeaderStyles" */
import { NavLink } from "react-router-dom";

function Header() {
  const [page, setPage] = useState(null);

  const handleClick = (e) => {
    page && page.classList.remove("active");
    console.log(e);
    setPage(e.target);
    console.log(page)
    e.target.classList.add("active");
  };

  return (
    <header className="App-header">
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
