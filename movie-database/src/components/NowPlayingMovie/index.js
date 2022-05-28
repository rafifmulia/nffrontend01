import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero';

function NowPlayingMovie() {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [movie, setMovie] = useState('');

  async function initData() {
    const playingMovies = await getPlayingMovies();
    const detailMovie = await getDetailMovie(playingMovies[0].id);
    setMovie(detailMovie);
  }
  async function getPlayingMovies() {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
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
    </>
  );
}

export default NowPlayingMovie;