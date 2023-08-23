import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export function ContactListItem({ name, number, handleDelete, id }) {
  return (
    <>
      {name}: {number}
      <button
        type="button"
        className={css.btn}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
