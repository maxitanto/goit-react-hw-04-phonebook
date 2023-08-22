import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, handleDelete }) => {
  if (contacts.length) {
    return (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.listItem}>
            <ContactListItem
              name={name}
              number={number}
              handleDelete={handleDelete}
              id={id}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return <h2 className={css.title}>Not found</h2>;
  }
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
