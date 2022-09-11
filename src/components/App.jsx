import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from '../pages/Layout/Layout';

import css from './App.module.css';

const Trending = lazy(() => (
  import('../pages/Trending/Trending')
));
const Movies = lazy(() => (
  import('../pages/Movies/Movies')
));
const FilmCard = lazy(() => (
  import('../pages/FilmCard/FilmCard')
));
const Cast = lazy(() => (
  import('../pages/Cast/Cast')
));
const Reviews = lazy(() => (
  import('../pages/Reviews/Reviews')
));

export const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<FilmCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Trending />} />
        </Route>
      </Routes>
    </div>
  );
};
