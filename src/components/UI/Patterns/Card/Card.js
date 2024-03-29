import React from "react";

import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div
      className={
        props.className === undefined
          ? `${classes.card}`
          : `${classes.card} ${props.className}`
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
