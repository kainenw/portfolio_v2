/* import ThemeCss from "./ThemeCss"; */
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

function ThemeMenu(props) {
  const { theme, changeTheme } = props;

  const handleClick = (props) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    changeTheme(nextTheme);
    localStorage.setItem("__theme", nextTheme);
  };

  return (
    <div 
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
      onClick={handleClick}
      >
      <img
        src={require(`../img/themed/${theme}/theme-icon.png`)}
        alt="toggle theme button"
        css={css`
          margin: 1rem;
          height: 2rem;
          width: 2rem;
        `}
      />
      {/* <ThemeCss theme={theme} /> */}
    </div>
  );
}

export default ThemeMenu;
