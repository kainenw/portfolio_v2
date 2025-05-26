/** @jsxRuntime classic */
import React from 'react'
import { css } from '@emotion/react'

function ThemeMenu(props) {
  const { theme, changeTheme } = props

  const handleClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    changeTheme(nextTheme)
    localStorage.setItem('__theme', nextTheme)
  }

  return (
    <div
      onKeyDown={handleClick}
      onClick={handleClick}
      role="button"
      tabIndex="0"
      css={css`
        position: fixed;
        bottom: 10%;
        right: 7%;
        height: 4rem;
        width: 4rem;
        border: 1px solid #404040;
        border-radius: 20px;
        cursor: pointer;
      `}
    >
      <img src={require(`../img/themed/${theme}/theme-icon.png`)} alt="toggle theme button" />
    </div>
  )
}

export default ThemeMenu
