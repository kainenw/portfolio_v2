import { useState } from "react";
import "./Header.css";
/* import "./HeaderStyles" */

function Header() {
  const [page, setPage] = useState(null);

  const handleClick = (e) => {
    page && page.classList.remove("active");
    setPage(e.target);
    e.target.classList.add("active");
  };

  return (
    <header className="App-header">
      <nav onClick={handleClick}>about</nav>
      {/*<nav onClick={handleClick}>blog</nav>*/}
      <nav onClick={handleClick}>projects</nav>
      <nav onClick={handleClick}>resources</nav>
      <nav onClick={handleClick}>contact</nav>
    </header>
  );
}

export default Header;
