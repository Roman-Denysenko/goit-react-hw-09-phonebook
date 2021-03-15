import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import selectors from '../../redux/contacts/selectors';

import s from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(selectors.getContactsItems);
  const visibleContacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return null;
  }

  const ContactItem = ({ id, name, number }) => {
    const onDeleteContact = () => dispatch(deleteContact(id));

    if (name === '' || number === '') {
      return null;
    }
    return (
      <CSSTransition key={id} timeout={250} classNames={s}>
        <li className={s.item}>
          {name}: {number}
          <button
            className={s.button}
            type="button"
            id={id}
            onClick={onDeleteContact}
          >
            Delete
          </button>{' '}
        </li>
      </CSSTransition>
    );
  };

  return (
    <TransitionGroup component="ul">
      {visibleContacts.map(ContactItem)}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
