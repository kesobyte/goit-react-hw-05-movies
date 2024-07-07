import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie, index) => (
        <li key={`${movie.id}-${index}`} className={css.movieListItem}>
          <Link to={`/movies/${movie.id}`} className={css.movieLink}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : `https://dummyimage.com/150x225/969696/e0e0e0.jpg&text=No+image`
              }
              alt={movie.title}
              className={css.movieImage}
            />
            <p className={css.movieTitle}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
