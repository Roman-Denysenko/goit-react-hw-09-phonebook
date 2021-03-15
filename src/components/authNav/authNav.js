import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import s from './AuthNav.module.css';

const NavLink = () => {
  return (
    <div className={s.container}>
      <Link to={routes.login} className={s.element}>
        Login
      </Link>
      <Link to={routes.registration} className={s.element}>
        Registration
      </Link>
    </div>
  );
};

NavLink.propType = {};

export default NavLink;
