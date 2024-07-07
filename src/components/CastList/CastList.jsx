import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import CastListItem from './CastListitem/CastListItem';

const CastList = ({ fetchCredits }) => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId, fetchCredits]);

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
