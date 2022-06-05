import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function PopularMovie() {
  const URL = ENDPOINTS.POPULAR;

  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" movies={movies} />
    </div>
  )
}

export default PopularMovie;