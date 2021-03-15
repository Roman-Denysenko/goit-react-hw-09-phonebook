import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './App.module.css';

import routes from './routes';
import Header from './components/header';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Home = lazy(() => import('./views/home'));
const Contacts = lazy(() => import('./views/contacts'));
const Registration = lazy(() => import('./views/registration'));
const Login = lazy(() => import('./views/login'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className={s.container}>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}
            component={Contacts}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
            component={Login}
          />
          <PublicRoute
            path={routes.registration}
            restricted
            redirectTo={routes.contacts}
            component={Registration}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
