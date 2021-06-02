import classes from "./TextInput.module.scss";

function TextInput(props) {
  const inputChangeHandler = (event) => {
    props.onChangeHandler(event.target.value);
  };
  const inputBlurHandler = (event) => {
    props.onBlurHandler();
  };

  return (
    <div
      className={
        props.className === undefined
          ? `${classes['input-field']}`
          : `${classes['input-field']} ${props.className}`
          ? "input-field"
          : "input-field " + props.className
      }
    >
      <label>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        type={props.type}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      ></input>
    </div>
  );
}

export default TextInput;
