import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/tmdb-api';
import Button from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <>
      <Link to={backLinkHref}>
        <Button text="⬅️ Go back" />
      </Link>

      <div className={css.movieDetailsContainer}>
        <img className={css.image} src="" />
      </div>

      {/* Fallback Loader while Waiting */}
      <Suspense fallback={<Loader />}>
        {/* Outlet should be used in parent route elements to render their child route elements */}
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
