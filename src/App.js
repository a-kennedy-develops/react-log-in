import React, { useState } from "react";

import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // Normally you would of course check email and password
    // But it's just a dummy/ demo anyways :)
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <main>{!isLoggedIn && <Login onLogin={loginHandler} />}</main>
    </React.Fragment>
  );
}

export default App;
