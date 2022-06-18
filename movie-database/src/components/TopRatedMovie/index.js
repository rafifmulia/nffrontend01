import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateMovie } from '../../features/moviesSlice';
import { updateMovie as updateMovieHero } from '../../features/heroMovieSlice';
import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function TopRatedMovies() {
  const dispatch = useDispatch();

  async function initData() {
    const topRatedMovies = await getTopRatedMovies();
    dispatch(updateMovie(topRatedMovies));
    const detailMovie = await getDetailMovie(topRatedMovies[0].id);
    dispatch(updateMovieHero(detailMovie));
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
  useEffect(() => initData(), []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRatedMovies;