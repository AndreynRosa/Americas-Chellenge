import React from 'react';

import { Route as ReactDOMRoute, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Route from './Route';
import Projects from '../pages/Projects';
import RegisterView from '../pages/RegisterView';

const Routes = () => {
  return (
    <Switch>
      <Route path="/project" component={Projects} isPrivate />
      <Route path="/register" component={RegisterView} isPrivate />
      <ReactDOMRoute path="/" component={Login} />
    </Switch>
  );
};

export default Routes;
