import { useEffect } from 'react';
import { useState } from 'react';
import { FilmList } from 'components/FilmsList/FilmList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { searchMovies } from 'services/api';

import styles from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  useEffect(() => {
    query && searchMovies(query).then(data => setFilms(data.data.results));
  }, [query]);

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  const hendleChange = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    if (query !== name && name !== '') {
      setSearchParams({ query: name });
    }
  };

  return (
    <div className={styles.movies}>
      <Searchbar onSubmit={hendleSubmit} name={name} onChange={hendleChange} />
      <FilmList films={films} />
    </div>
  );
};

export default Movies;
