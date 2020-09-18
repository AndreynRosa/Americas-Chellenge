import React from 'react';
import { createBrowserHistory } from 'history';

import {
  Router,
  Route as ReactDOMRoute,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import Route from './Route';
import Projects from '../pages/Projects';

const hist = createBrowserHistory();
const Routes = () => {
  return (
    <>
      <Router history={hist}>
        <Switch>
          <ReactDOMRoute exact path="/" component={Login} />
          <Route path="/projects" component={Projects} isPrivate />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
