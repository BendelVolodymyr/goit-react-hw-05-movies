import ErrorPage from 'pages/ErrorPage';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/Layout';
import Movie from 'pages/Movie';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
