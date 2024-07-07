import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/tmdb-api';
import css from './MovieDetailsPage.module.css';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
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

  const { poster_path, title, overview, release_date, genres, vote_average } =
    movieDetails;

  return (
    <>
      <Link to={backLinkHref}>
        <Button text="⬅️ Go back" />
      </Link>

      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div className={css.details}>
          <h2>{title}</h2>
          <p>Release Date: {release_date}</p>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
