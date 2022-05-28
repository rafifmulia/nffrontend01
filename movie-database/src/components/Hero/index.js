import { useState, useEffect } from 'react';
import axios from 'axios';
import StyledHero from './Hero.styled';
import Button from '../ui/Button';
import Image from '../ui/Image';

function Hero(props) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const IMG_PATH = process.env.REACT_APP_TMDB_IMAGE;
  
  const [movie, setMovie] = useState('');
  const genres = (() => {
    // return movie.Genre || (movie && movie.genres.reduce((prev, crnt) => prev + crnt.name + ',', '').slice(0, -1));
    return movie.Genre || (movie && movie.genres.map((genres) => genres.name).join(', '));
  })();
  const trailerUrl = (() => {
    return movie && movie.videos && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  })();

  // effect with initial data (mounting only)
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    return response.data.results;
  }
  async function getDetailMovie(id) {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data;
  }
  async function getTrendingMovie() {
    const trendingMovies = await getTrendingMovies();
    const detailMovie = await getDetailMovie(trendingMovies[0].id);
    setMovie(detailMovie);
  }
  function initData() {
    if (props.movie) {
      setMovie(props.movie);
      return;
    }
    getTrendingMovie();
  }
  useEffect(initData, []);

  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.Title || movie.title}</h2>
          <h3>Genre: {genres}</h3>
          <p>{movie.Plot || movie.overview}</p>
          <Button variant="primary" as="a" href={trailerUrl} target="_blank">Watch</Button>
        </div>
        <div>
          <Image
            src={movie.Poster || `${IMG_PATH}${movie.poster_path}`}
            alt={movie.Title || movie.title}
          />
        </div>
      </section>
    </StyledHero>
  )
}

export default Hero;