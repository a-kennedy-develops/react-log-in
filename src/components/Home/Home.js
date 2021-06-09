import React from 'react';

import Card from '../UI/Patterns/Card/Card';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
