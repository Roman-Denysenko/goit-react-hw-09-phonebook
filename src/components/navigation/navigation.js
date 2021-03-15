import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <Link exact="true" to={routes.home} className={s.link}>
        Home
      </Link>
      <Link to={routes.contacts} className={s.link}>
        Contacts
      </Link>
    </div>
  );
};

export default Navigation;
