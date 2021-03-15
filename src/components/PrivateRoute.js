import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { getAuthenticated } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(getAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
