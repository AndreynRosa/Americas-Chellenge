import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { getToken } from '../service/localSrogaService';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  props?: any
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {

  let jwtToken = getToken();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === (jwtToken != null) ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/project',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export default Route;
