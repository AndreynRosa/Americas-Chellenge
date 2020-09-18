import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === true ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : `/projects`,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
