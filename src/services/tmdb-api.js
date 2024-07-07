import axios from 'axios';

const API_KEY = '526b650b7a87d81fa6582d5f1ca94e82';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

// Fetch Trening Movies
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

// Fetch Movies by Query
export const fetchMovieQuery = async () => {
  const response = await axios.get(`search/movie?=${movieName}`);
  return response.data.results;
};

// Fetch Movie Details
export const fetchMovieDetails = async () => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data.results;
};

// Fetch Movie Cast
export const fetchMovieCast = async () => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.results;
};

// Fetch Movie Reviews
export const fetchMovieReviews = async () => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
