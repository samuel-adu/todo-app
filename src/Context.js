import React, { useState } from "react";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  function toggle() {
    setDarkMode((prev) => !prev);
  }

  return (
    <Context.Provider value={{ darkMode, toggle }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
