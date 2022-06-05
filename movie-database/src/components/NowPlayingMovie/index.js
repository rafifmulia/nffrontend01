import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function NowPlayingMovie() {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState('');

  async function initData() {
    const playingMovies = await getPlayingMovies();
    setMovies(playingMovies);
    const detailMovie = await getDetailMovie(playingMovies[0].id);
    setMovie(detailMovie);
  }
  async function getPlayingMovies() {
    const URL = ENDPOINTS.NOW_PLAYINGS;
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
      {movies && <Movies movies={movies} title="Now Playing Movies" />}
    </>
  );
}

export default NowPlayingMovie;