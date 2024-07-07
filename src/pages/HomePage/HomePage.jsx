import { useEffect, useState, useCallback } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'services/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrendingMovies = useCallback(async page => {
    setIsLoading(true);
    try {
      const movies = await fetchTrendingMovies(page);
      setTrendingMovies(prevMovies => [...prevMovies, ...movies]);
      if (movies.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrendingMovies(page);
  }, [page, getTrendingMovies]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending Movies</h2>
      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
      {isLoading && <Loader />}
      {!isLoading && hasMore && (
        <button className={styles.loadMoreButton} onClick={handleLoadMore}>
          Load More
        </button>
      )}
      {!hasMore && <p className={styles.endMessage}>No more movies to load</p>}
    </div>
  );
};

export default HomePage;
