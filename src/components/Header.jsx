import { useContext } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { Context } from "../Context";

function Header() {
  const { toggle, darkMode } = useContext(Context);

  return (
    <header>
      <div className="navbar">
        <h1 className="logo">Todo</h1>
        <img
          src={darkMode ? sun : moon}
          alt="mode icon"
          className="mode-icon"
          onClick={toggle}
        />
      </div>
    </header>
  );
}

export default Header;
