import React, { useRef, useImperativeHandle } from 'react';

import classes from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  });

  return (
    <div
      className={
        props.className === undefined
          ? `${classes['input-field']}`
          : `${classes['input-field']} ${classes[props.className]}`
      }
    >
      <label>{props.label}</label>
      <input
        ref={inputRef}
        id={props.id}
        value={props.value}
        type={props.type}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      ></input>
    </div>
  );
});

export default Input;
