import axios from 'axios';

const key = '59483ef1407ef779ba79a4ef6c1e5236';

export const getTrendingList = async () => {
  const params = new URLSearchParams({
    api_key: `${key}`,
  });
  const URL = `https://api.themoviedb.org/3/trending/movie/day?${params}`;

  return await axios.get(URL);
};

export const searchMovies = async query => {
  const params = new URLSearchParams({
    query: `${query}`,
    api_key: `${key}`,
  });
  const URL = `https://api.themoviedb.org/3/search/movie?${params}`;

  return await axios.get(URL);
};

export const getMovieDetails = async movie_id => {
  const params = new URLSearchParams({
    api_key: `${key}`,
    language: 'en - US',
  });
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}?${params}`;

  return await axios.get(URL);
};

export const getMovieCredits = async movie_id => {
  const params = new URLSearchParams({
    api_key: `${key}`,
    language: 'en - US',
  });
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?${params}`;

  return await axios.get(URL);
};

export const getMovieReviews = async movie_id => {
  const params = new URLSearchParams({
    api_key: `${key}`,
    language: 'en - US',
  });
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?${params}`;

  return await axios.get(URL);
};
