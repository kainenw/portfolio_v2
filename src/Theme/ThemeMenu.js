import ThemeCss from "./ThemeCss";

function ThemeMenu(props) {
  const { theme, changeTheme } = props;

  const handleClick = (props) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    changeTheme(nextTheme);
    localStorage.setItem("__theme", nextTheme);
  };

  return (
    <div className="ThemeMenu">
      <button onClick={handleClick}>toggle theme</button>
      <ThemeCss theme={theme} />
    </div>
  );
}

export default ThemeMenu;
