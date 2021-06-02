import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.scss";
import uiHelpers from "../UI/Helpers/Helpers.module.scss";
import Button from "../UI/Button/Button";
import TextInput from "../UI/TextInput/TextInput";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (value) => {
    setEnteredEmail(value);

    setFormIsValid(
      value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (value) => {
    setEnteredPassword(value);

    setFormIsValid(
      value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <TextInput
          label="Email"
          type="email"
          id="email"
          value={enteredEmail}
          onChangeHandler={emailChangeHandler}
          onBlurHandler={validateEmailHandler}
        />
        <TextInput
          label="Password"
          type="password"
          id="password"
          value={enteredPassword}
          onChangeHandler={passwordChangeHandler}
          onBlurHandler={validatePasswordHandler}
        />
        <div className={uiHelpers.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
