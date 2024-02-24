import themes from "./themeStyles";

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
      style={{
        backgroundColor: themes[theme].background,
        position: "fixed",
        borderRadius: "20px",
        bottom: "10%",
        right: "7%",
        height: "4rem",
        width: "4rem",
        border: "1px solid #404040",
      }}
    >
      <img
        onClick={handleClick}
        src={require(`../img/themed/${theme}/theme-icon.png`)}
        alt="toggle theme button"
        style={{
          margin: "1rem",
          height: "2rem",
          width: "2rem",
          cursor: "pointer",
        }}
      />
      {/* <ThemeCss theme={theme} /> */}
    </div>
  );
}

export default ThemeMenu;
