import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const SearchBar = ({ value, onCangeFilter }) => {
  return (
    <input
      className={styles.input}
      onChange={onCangeFilter}
      type="text"
      value={value}
      placeholder="Type to filter movie..."
    />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onCangeFilter: PropTypes.func.isRequired,
};

export default SearchBar;
