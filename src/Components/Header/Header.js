import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(props) {
  const { theme, changeTheme } = props

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', nextTheme)
    changeTheme(nextTheme)
    localStorage.setItem('__theme', nextTheme)
  }

  // NavLink handles active class automatically
  return (
    <header className="App-header" data-theme={theme}>
      <div className="nav-links">
        <NavLink to="/" end>
          home
        </NavLink>
        {/* <nav>blog</nav> */}
        <NavLink to="/projects">
          projects
        </NavLink>
        {/* <NavLink to="/resources">
          resources
        </NavLink> */}
        <NavLink to="/about">
          about
        </NavLink>
        <NavLink to="/contact">
          contact
        </NavLink>
        <button
          className="ThemeMenu"
          onClick={handleThemeToggle}
          aria-label="Change Theme"
        >
          <img
            src={require(`../../img/themed/${theme}/theme-icon.png`)}
            alt="toggle theme button"
          />
        </button>
      </div>
    </header>
  )
}

export default Header