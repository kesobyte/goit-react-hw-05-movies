import axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '526b650b7a87d81fa6582d5f1ca94e82';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

// Fetch Trending Movies
export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await axios.get('/trending/movie/week', {
      params: {
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch trending movies:', error);
    throw error;
  }
};

// Fetch Movies by Query
export const fetchMovieQuery = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};

// Fetch Movie Details
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

// Fetch Movie Cast
export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

// Fetch Movie Reviews
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
