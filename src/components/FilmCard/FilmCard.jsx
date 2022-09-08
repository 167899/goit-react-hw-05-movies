import { Button } from 'components/Button/Buttun';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import css from './FilmCard.module.css';

export const FilmCard = () => {
  const { movieId } = useParams();
  const [filmCard, setFilmCard] = useState(null);
  const [img, setImg] = useState({});
  let location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId.toString()).then(data => {
      setFilmCard(data.data);
      setImg({ path: data.data.poster_path, size: 'w342' });
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref} className={css.linkBack}>
        <Button />
      </Link>
      {filmCard && (
        <div className={css.filmCart}>
          <img
            src={`https://image.tmdb.org/t/p/${img.size}/${img.path}`}
            alt={filmCard.original_title}
          />
          <div className={css.content}>
            <h2>
              {filmCard.original_title}
              <span> ({filmCard.release_date.slice(0, 4)})</span>
            </h2>
            <p>
              <span>User Score: </span>
              {Math.trunc(filmCard.vote_average * 10)}%
            </p>
            <h3>Overview</h3>
            <p>{filmCard.overview}</p>
            <h4>Genres</h4>
            <ul className={css.genresList}>
              {filmCard.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
