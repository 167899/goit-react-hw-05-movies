import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieCredits } from 'services/api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId.toString()).then(data => {
      setCast(data.data.cast);
    });
  }, [movieId]);

  return (
    <>
      <ul className={css.castList}>
        {cast.map(element => (
          <li className={css.castItem} key={element.id}>
            <div className={css.imgBlock}>
              <img
                src={element.profile_path ?
                  `https://image.tmdb.org/t/p/w342/${element.profile_path}`
                  : ''}
                alt={element.original_name}
              />
            </div>
            <h3>{element.original_name}</h3>
            <p>Character in this movie: {element.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
