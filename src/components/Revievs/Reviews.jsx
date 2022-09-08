// import { Button } from 'components/Button/Buttun';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {getMovieReviews } from 'services/api';
import css from './Reviews.module.css'

// import PropTypes from 'prop-types';


export const Reviews = () => {
  const {movieId} = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId.toString()).then(data => {
      setReviews(data.data.results)
    });
  }, [movieId]);


  return (
    <>
      {reviews.length === 0 ? <div>We don't have any reviews for this movie</div> :
        <ul className={css.reviewsList}>
          {reviews.map(element => (
            <li class={css.reviewsItem} key={element.id}>
              <h3>Author: {element.author}</h3>
              <p> {element.content}</p>
            </li>
          ))}
        </ul>}
      
    </>
  );
};