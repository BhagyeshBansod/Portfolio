import React, { useContext } from "react";
import { themeContext } from "../../context/Context";
import "./ToggleButton.css";

const ToggleButton = () => {
  const theme = useContext(themeContext);
  const { state, dispatch } = theme;

  const onToggle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div
      onClick={onToggle}
      className={`toggle ${state.darkMode ? "night" : ""}`}
    >
      <div className="sun" />
    </div>
  );
};

export default ToggleButton;
