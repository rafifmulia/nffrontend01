import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { updateMovie } from "../../features/moviesSlice";
import StyledDetailMovie from './DetailMovie.styled';
import Button from '../ui/Button';
// import Hero from '../Hero';
import Movies from '../Movies';
import ENDPOINTS from '../../utils/constants/endpoints';

function DetailMovie() {
  const [movie, setMovie] = useState('');
  const { id: movieId } = useParams();

  const dispatch = useDispatch();

  const genres = (() => {
    // return movie.Genre || (movie && movie.genres.reduce((prev, crnt) => prev + crnt.name + ',', '').slice(0, -1));
    return movie.Genre || (movie && movie.genres.map((genres) => genres.name).join(', '));
  })();
  const trailerUrl = (() => {
    return movie && movie.videos && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  })();

  async function initData() {
    const detailMovie = await getDetailMovie(movieId);
    setMovie(detailMovie);
    const recommendMovies = await getRecommendMovies(movieId);
    dispatch(updateMovie(recommendMovies));
  }
  async function getRecommendMovies(id) {
    const URL = ENDPOINTS.RECOMMENDATION(id);
    const response = await axios(URL);
    return response.data.results;
  }
  async function getDetailMovie(id) {
    const URL = ENDPOINTS.DETAIL(id);
    const response = await axios(URL);
    return response.data;
  }
  useEffect(() => {
    initData();
  }, [movieId]);

  return (
    <>
      <StyledDetailMovie>
        <div className="poster">
          <img
            src={movie.poster_path && `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button as="a" href={trailerUrl}>
            Watch
          </Button>
        </div>
      </StyledDetailMovie>
      <Movies title="Recommendations" />
    </>
  );
}

export default DetailMovie;