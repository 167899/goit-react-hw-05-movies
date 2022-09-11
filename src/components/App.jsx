import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';

import css from './App.module.css';

const Trending = lazy(() => (
  import('./Trending/Trending')
));
const Movies = lazy(() => (
  import('./Movies/Movies')
));
const FilmCard = lazy(() => (
  import('./FilmCard/FilmCard')
));
const Cast = lazy(() => (
  import('./Cast/Cast')
));
const Reviews = lazy(() => (
  import('./Reviews/Reviews')
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
