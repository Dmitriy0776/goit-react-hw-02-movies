import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const MovieCard = ({ posterUrl, title, overview }) => {
  return (
    <div className={styles.movie_card}>
      <img src={posterUrl} alt="" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descr}>{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
