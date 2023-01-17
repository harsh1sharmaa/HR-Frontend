import React from "react";
import "./Button.css";

const Button = ({
  text = "Button",
  className = "",
  onClick = {},
  disabled = {},
}) => {
  return (
    <>
      <button
        type="button"
        className={`glow-on-hover ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
