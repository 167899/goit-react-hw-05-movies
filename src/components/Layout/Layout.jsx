import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingList } from 'services/api';
import css from './Layout.module.css'
// import { Button } from './Button/Buttun';
import { Header } from '../Header/Header';
// import { Searchbar } from './Searchbar/Searchbar';
import { Trending } from '../Trending/Trending';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
// const [films, setFilms] = useState([]);
// const [query, setQuery] = useState('');
// const [name, setName] = useState('')

//   useEffect(() => {
//     searchMovies(query).then(data => setFilms(data.data.results));
//   }, [query]);

//   const hendleChange = e => {
//     const { value } = e.currentTarget;
//     setName(value);
//   };

//   const hendleSubmit = e => {
//     e.preventDefault();

//     if (query !== name && name !== '') {
//       setQuery(name);
//     }
//   };


  return (
    <div
      className={css.layout}
    >
      <Header />
      {/* <Searchbar /> */}
      <Outlet/>
      {/* <Trending films={films} /> */}
        {/* <Button/> */}
    </div>
  );
};