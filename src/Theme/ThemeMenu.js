import React from 'react'
import styled from '@emotion/styled'

const StyledThemeMenu = styled.button`
  position: fixed;
  bottom: 10%;
  right: 7%;
  height: 4rem;
  width: 4rem;
  border: 1px solid #404040;
  border-radius: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  img {
    margin: 1rem;
    height: 2rem;
    width: 2rem;
  }
`

function ThemeMenu(props) {
  const { theme, changeTheme } = props

  const handleClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', nextTheme)
    changeTheme(nextTheme)
    localStorage.setItem('__theme', nextTheme)
  }

  return (
    <StyledThemeMenu onClick={handleClick} aria-label="Change Theme">
      <img src={require(`../img/themed/${theme}/theme-icon.png`)} alt="toggle theme button" />
    </StyledThemeMenu>
  )
}

export default ThemeMenu
