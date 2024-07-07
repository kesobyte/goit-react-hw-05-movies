import PropTypes from 'prop-types';
import css from './CastListItem.module.css';

const CastListItem = ({ profilePath, originalName, name }) => {
  return (
    <li className={css.castListItem}>
      <img
        className={css.castImage}
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w300${profilePath}`
            : `https://dummyimage.com/150x225/969696/e0e0e0.jpg&text=No+image`
        }
        alt={originalName}
      />
      <p className={css.castName}>{name}</p>
    </li>
  );
};

CastListItem.propTypes = {
  profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CastListItem;
