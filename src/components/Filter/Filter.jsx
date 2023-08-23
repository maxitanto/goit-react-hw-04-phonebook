import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <div className={css.wrapper}>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
