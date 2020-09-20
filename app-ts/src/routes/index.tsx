import React from 'react';

import {Route as ReactDOMRoute,  Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Route from './Route';
import Projects from '../pages/Projects';

const Routes = () => {
  return (
    <Switch>
      <Route path="/project" component={Projects}  isPrivate />
      <ReactDOMRoute path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
