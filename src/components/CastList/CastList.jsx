import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import CastListItem from './CastListitem/CastListItem';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul>
      {cast.map(actor => (
        <CastListItem
          key={actor.id}
          profilePath={actor.profile_path}
          originalName={actor.original_name}
          name={actor.name}
        />
      ))}
    </ul>
  );
};

export default CastList;
