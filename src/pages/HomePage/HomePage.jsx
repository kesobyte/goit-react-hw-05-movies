import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'services/tmdb-api';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.length === 0 ? (
        <Loader />
      ) : (
        <MovieList movies={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
