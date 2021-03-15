import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { fetchContacts } from '../../redux/contacts/operations';
import selectors from '../../redux/contacts/selectors';

import ContactForm from '../../components/contactForm';
import ContactList from '../../components/contactList';
import Filter from '../../components/filter';

const Contacts = () => {
  const items = useSelector(selectors.getContactsItems);
  const loading = useSelector(selectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), []);

  return (
    <div className={s.container}>
      <CSSTransition
        in={true}
        appear={true}
        classNames={s}
        timeout={500}
        unmountOnExit
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <ContactForm />
      {loading && <p>Loading...</p>}

      <CSSTransition
        in={items.length > 0}
        timeout={250}
        classNames={s}
        unmountOnExit
      >
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Contacts;
