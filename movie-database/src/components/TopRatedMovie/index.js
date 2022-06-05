import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function TopRatedMovies() {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState('');

  async function initData() {
    const topRatedMovies = await getTopRatedMovies();
    setMovies(topRatedMovies);
    const detailMovie = await getDetailMovie(topRatedMovies[0].id);
    setMovie(detailMovie);
  }
  async function getTopRatedMovies() {
    const URL = ENDPOINTS.TOP_RATED;
    const response = await axios(URL);
    return response.data.results;
  }
  async function getDetailMovie(id) {
    const URL = ENDPOINTS.DETAIL(id);
    const response = await axios(URL);
    return response.data;
  }
  useEffect(initData, []);

  return (
    <>
      {movie && <Hero movie={movie} />}
      {movies && <Movies movies={movies} title="Top Rated Movies" />}
    </>
  );
}

export default TopRatedMovies;