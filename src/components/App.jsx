import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';

// Lazy load should be a default export
const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviePage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const CastList = lazy(() => import('./CastList/CastList.jsx'));
const ReviewList = lazy(() => import('./ReviewList/ReviewList.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
