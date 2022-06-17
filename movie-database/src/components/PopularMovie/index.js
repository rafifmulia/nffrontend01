import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateMovie } from '../../features/moviesSlice';
import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function PopularMovie() {
  const URL = ENDPOINTS.POPULAR;

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      getPopularMovies();
    })()
  }, []);

  async function getPopularMovies() {
    const response = await axios(URL);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  )
}

export default PopularMovie;