import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Trending } from './Trending/Trending';
import { Movies } from './Movies/Movies';
import { FilmCard } from './FilmCard/FilmCard';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';

import css from './App.module.css';

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
