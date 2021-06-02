import React from "react";

import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={
        props.className === undefined
          ? `${classes.button}`
          : `${classes.button} ${props.className}`
      }
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
