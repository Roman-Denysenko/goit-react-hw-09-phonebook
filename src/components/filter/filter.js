import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/contacts/actions';
import selectors from '../../redux/contacts/selectors';

import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(selectors.getFilterValue);
  const dispatch = useDispatch();
  const onFilter = e => dispatch(filter(e.target.value));

  return (
    <>
      <label className={s.label}>
        Find contact by name
        <input
          className={s.input}
          type="text"
          name="filter"
          value={value}
          onChange={onFilter}
        ></input>
      </label>
    </>
  );
};

export default Filter;
