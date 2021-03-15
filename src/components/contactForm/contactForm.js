import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import Warning from '../warning';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import selectors from '../../redux/contacts/selectors';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [warning, setWarning] = useState(false);

  const handleInputName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleInputNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const { items } = contacts;
    const contactItem = { id: uuidv4(), name, number };

    if (name === '' || number === '') {
      return;
    }

    if (items.find(item => name === item.name)) {
      setWarning(true);
      return;
    } else {
      setWarning(false);
    }
    dispatch(addContact(contactItem));
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.formContainer}>
      <CSSTransition in={warning} timeout={250} classNames={s} unmountOnExit>
        <Warning name={name} />
      </CSSTransition>

      <form onSubmit={handleSubmitForm} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputName}
          ></input>
        </label>

        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleInputNumber}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
