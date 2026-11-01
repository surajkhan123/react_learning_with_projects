import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  const changeTheme = () => {
    setTheme("dark");
  };
  return (
    <div>
      <button onClick={changeTheme}>click button</button>
    </div>
  );
};

export default Button;
