import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import styles from '../styles.module.css';

const MovieGrid = ({ items }) =>
  items.length > 0 && (
    <ul className={styles.movie_grid}>
      {items.map(item => (
        <li key={item.id}>
          <MovieCard
            posterUrl={item.posterUrl}
            title={item.title}
            overview={item.overview}
          />
        </li>
      ))}
    </ul>
  );

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      posterUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
