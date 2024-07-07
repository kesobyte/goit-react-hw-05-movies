import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/tmdb-api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <Link to={backLinkHref}>
        <Button text="⬅️ Go back" onClick={() => {}} />
      </Link>
      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://fakeimg.pl/600x400?text=Image+Not+Available`
          }
          alt={title}
        />
        <div className={css.movieDetailsWrap}>
          <h1>{title}</h1>
          <h4>User score: {Math.round(vote_average * 10)}%</h4>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <hr />
      <h3>Additional Information</h3>
      <Link to="cast">
        <Button text="Cast" onClick={() => {}} />
      </Link>
      <Link to="reviews">
        <Button text="Reviews" onClick={() => {}} />
      </Link>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
