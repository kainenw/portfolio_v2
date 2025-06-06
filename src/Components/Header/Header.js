import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, FolderOpen, User, Mail } from 'lucide-react'
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
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Home size={20} style={{ marginBottom: '2px' }} />
            <span>home</span>
          </span>
        </NavLink>
        {/* <nav>blog</nav> */}
        <NavLink to="/projects">
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FolderOpen size={20} style={{ marginBottom: '2px' }} />
            <span>projects</span>
          </span>
        </NavLink>
        {/* <NavLink to="/resources">
          resources
        </NavLink> */}
        <NavLink to="/about">
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <User size={20} style={{ marginBottom: '2px' }} />
            <span>about</span>
          </span>
        </NavLink>
        <NavLink to="/contact">
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Mail size={20} style={{ marginBottom: '2px' }} />
            <span>contact</span>
          </span>
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