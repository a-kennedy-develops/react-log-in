import React from 'react';

import Navigation from './Navigation';
import classes from './HeaderNav.module.scss';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Generic Login Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
