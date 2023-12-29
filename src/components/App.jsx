import ErrorPage from 'pages/ErrorPage';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route index element={<MoviesPage />} />
          <Route path="/movies/:movieId">
            <Route index />
            <Route path="reviews" />
            <Route path="cast" />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
