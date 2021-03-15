import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import s from './Registration.module.css';

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration</h1>
      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label}>
          {' '}
          Name
          <input
            className={s.input}
            type="name"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label className={s.label}>
          {' '}
          Mail
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

export default Registration;
