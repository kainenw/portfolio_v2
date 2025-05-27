import React from 'react'
import './ThemeMenu.css'

function ThemeMenu(props) {
  const { theme, changeTheme } = props

  const handleClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', nextTheme)
    changeTheme(nextTheme)
    localStorage.setItem('__theme', nextTheme)
  }

  return (
    <button className="ThemeMenu" onClick={handleClick} aria-label="Change Theme">
      <img src={require(`../img/themed/${theme}/theme-icon.png`)} alt="toggle theme button" />
    </button>
  )
}

export default ThemeMenu
