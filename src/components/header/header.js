import React from 'react';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

import Navigation from '../navigation';
import AuthNav from '../authNav';
import UserMenu from '../userMenu';
import { getAuthenticated } from '../../redux/auth/auth-selectors';

const Header = () => {
  const Authorization = useSelector(getAuthenticated);

  return (
    <header className={s.header}>
      <nav>
        <Navigation />
      </nav>
      <div className={s.authorization}>
        {Authorization ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
