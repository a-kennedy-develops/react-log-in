import React, { useState, useEffect } from "react";

import Card from "../UI/Patterns/Card/Card";
import Button from "../UI/Patterns/Button/Button";
import TextInput from "../UI/Patterns/TextInput/TextInput";

import classes from "./Login.module.scss";
import uiHelpers from "../UI/Helpers/Helpers.module.scss";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const validityTimer = setTimeout(() => {
      // console.log("Checking validity")
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    // Clean up function
    return () => {
      // console.log('CLEANUP');
      clearTimeout(validityTimer);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   enteredEmail.includes('@') && enteredPassword.trim().length > 6
    // );
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
          className={emailIsValid === false ? 'invalid' : undefined}
          value={enteredEmail}
          onChangeHandler={emailChangeHandler}
          onBlurHandler={validateEmailHandler}
        />
        <TextInput
          label="Password"
          type="password"
          id="password"
          className={passwordIsValid === false ? 'invalid' : undefined}
          value={enteredPassword}
          onChangeHandler={passwordChangeHandler}
          onBlurHandler={validatePasswordHandler}
        />
        <div className={uiHelpers['align-center']}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
