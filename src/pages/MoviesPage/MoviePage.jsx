import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieQuery } from 'services/tmdb-api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';
import styles from './MoviePage.module.css';

const MoviePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovieQuery(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieName]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <SearchBar value={movieName} onChange={updateQueryString} />
      </div>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : movieName && searchResults.length === 0 ? (
        <h2 className={styles.noResults}>🔎 Nothing Found</h2>
      ) : (
        <MovieList movies={searchResults} />
      )}
    </div>
  );
};

export default MoviePage;
