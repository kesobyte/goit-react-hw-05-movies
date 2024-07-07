import PropTypes from 'prop-types';
import css from './CastListItem.module.css';
import { LineWave } from 'react-loader-spinner';

export const CastListItem = ({ profilePath, originalName, name }) => {
  return (
    <li className={css.CastListItem}>
      <img
        width="200px"
        height="300px"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w300${profilePath}`
            : `https://fakeimg.pl/600x400?text=Image+Not+Available`
        }
        alt={originalName}
      />
      <p>{name}</p>
    </li>
  );
};

CastListItem.propTypes = {
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
