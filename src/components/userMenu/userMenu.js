import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';

import { getAuthEmail } from '../../redux/auth/auth-selectors';
import defaultImg from './defImg.png';
import { logOut } from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const email = useSelector(getAuthEmail);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div className={s.container}>
      <img src={defaultImg} alt="" width="32" className={s.element} />
      <span className={s.element}>Welcome: {email}</span>
      <button type="button" onClick={onLogout} className={s.element}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
