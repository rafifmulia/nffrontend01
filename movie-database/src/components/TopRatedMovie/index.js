import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero';
import Movies from '../Movies';

function TopRatedMovies() {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState('');

  async function initData() {
    const topRatedMovies = await getTopRatedMovies();
    setMovies(topRatedMovies);
    const detailMovie = await getDetailMovie(topRatedMovies[0].id);
    setMovie(detailMovie);
  }
  async function getTopRatedMovies() {
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results;
  }
  async function getDetailMovie(id) {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data;
  }
  useEffect(initData, []);

  return (
    <>
      {movie && <Hero movie={movie} />}
      {movies && <Movies movies={movies} />}
    </>
  );
}

export default TopRatedMovies;