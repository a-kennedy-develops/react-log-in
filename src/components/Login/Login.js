import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Patterns/Card/Card";
import Button from "../UI/Patterns/Button/Button";
import TextInput from "../UI/Patterns/TextInput/TextInput";

import classes from "./Login.module.scss";
import uiHelpers from "../UI/Helpers/Helpers.module.scss";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const validityTimer = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   // Clean up function
  //   return () => {
  //     clearTimeout(validityTimer);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );

    // Using useReducer...
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    console.log('Value - ' + emailState.value);
    console.log('isValid - ' + emailState.isValid);

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   enteredEmail.includes('@') && enteredPassword.trim().length > 6
    // );

    // Using useReducer...
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = (event) => {
    // setEmailIsValid(enteredEmail.includes("@"));

    // Using useReducer...
    dispatchEmail({type: 'INPUT_BLUR', val: event.target.value});
  };

  const validatePasswordHandler = (event) => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);

    // Using useReducer...
    dispatchPassword({type: 'INPUT_BLUR', val: event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);

    // Using useReducer...
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <TextInput
          label="Email"
          type="email"
          id="email"
          // className={emailIsValid === false ? "invalid" : undefined}
          // value={enteredEmail}

          // Using useReducer...
          value={emailState.value}
          className={emailState.isValid === false ? "invalid" : undefined}

          onChangeHandler={emailChangeHandler}
          onBlurHandler={validateEmailHandler}
        />
        <TextInput
          label="Password"
          type="password"
          id="password"
          // className={passwordIsValid === false ? "invalid" : undefined}
          // value={enteredPassword}

          // Using useReducer...
          value={passwordState.value}
          className={passwordState.isValid === false ? "invalid" : undefined}

          onChangeHandler={passwordChangeHandler}
          onBlurHandler={validatePasswordHandler}
        />
        <div className={uiHelpers["align-center"]}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
