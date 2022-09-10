import { Link, useLocation } from 'react-router-dom';
import css from './FilmList.module.css';

import PropTypes from 'prop-types';

export const FilmList = ({ films }) => {
  let location = useLocation();
  return (
    <ul className={css.filmList}>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
