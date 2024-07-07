import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieQuery } from 'services/tmdb-api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

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
    <div>
      <SearchBar value={movieName} onChange={updateQueryString} />
      {isLoading ? (
        <Loader />
      ) : movieName && searchResults.length === 0 ? (
        <h2>🔎 Nothing Found</h2>
      ) : (
        <MovieList movies={searchResults} />
      )}
    </div>
  );
};

export default MoviePage;
