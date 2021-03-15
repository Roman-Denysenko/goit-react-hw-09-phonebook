import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import s from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form autoComplete="off" onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          {' '}
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className={s.label}>
          {' '}
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit" className={s.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
