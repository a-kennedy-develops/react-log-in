import classes from "./TextInput.module.scss";

function TextInput(props) {
  const inputChangeHandler = (event) => {
    props.returnInputHandler(event.target.value);
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
        type={props.type}
        onChange={inputChangeHandler}
        value={props.value}
      ></input>
    </div>
  );
}

export default TextInput;
