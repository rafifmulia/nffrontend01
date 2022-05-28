import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Hero';
import Movies from '../Movies';

function PopularMovie() {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

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