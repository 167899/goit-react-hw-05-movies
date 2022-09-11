import { FilmList } from 'components/FilmsList/FilmList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingList } from 'services/api';
import css from './Trending.module.css';

const Trending = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingList().then(data => setFilms(data.data.results));
  }, []);

  return (
    <div className={css.trending}>
      <h1>Trending today</h1>
      <FilmList films={films} />
    </div>
  );
};

export default Trending;
