import { useContext } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { ThemeContext } from "../Context";

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header>
      <div className="navbar">
        <h1 className="logo">Todo</h1>
        <img
          src={theme === "dark" ? sun : moon}
          alt="mode icon"
          className="mode-icon"
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}

export default Header;
