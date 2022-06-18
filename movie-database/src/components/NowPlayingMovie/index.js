import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateMovie } from "../../features/moviesSlice";
import { updateMovie as updateMovieHero } from '../../features/heroMovieSlice';
import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function NowPlayingMovie() {

  const dispatch = useDispatch();

  async function initData() {
    const playingMovies = await getPlayingMovies();
    // contoh penggunaan tanpa action(reducers)
    // dispatch({ type: 'movies/imdb', payload: playingMovies });
    // contoh penggunaan dengan action(reducers)
    dispatch(updateMovie(playingMovies));
    const detailMovie = await getDetailMovie(playingMovies[0].id);
    dispatch(updateMovieHero(detailMovie));
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
  useEffect(() => initData(), []);

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movies" />
    </>
  );
}

export default NowPlayingMovie;