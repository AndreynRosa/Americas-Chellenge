import React from 'react';
import { useSelector } from 'react-redux';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { getToken } from '../service/localSrogaService';
import isAuthteticated from '../utils/getValidationErros';
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { email } = useAuth();
  const isAuthUser = useSelector((state) => state.auth.isAuthUser);
  let jwtToken = getToken();


  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === (jwtToken == null) ? (
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
