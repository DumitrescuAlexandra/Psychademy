import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [isActive, setIsActive] = useState(true);

  const activeBtnHandler = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      return;
    }
  };

  const btnClass = isActive ? ".btn_active" : ".btn_inactive";

  return (
    <button classname={`classes${btnClass}`} onClick={activeBtnHandler}>
      {props.name}
    </button>
  );
};

export default Button;
