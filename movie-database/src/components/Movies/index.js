import { useSelector } from 'react-redux';
import Movie from '../Movie';
import StyledMovie from './Movies.styled';
import MovieStyledContainer from './MovieContainer.styled';

function Movies(props) {
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);

  return (
    <StyledMovie>
      <section>
        <h2>{title || 'Latest Movie'}</h2>
        <MovieStyledContainer>
          {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </MovieStyledContainer>
      </section>
    </StyledMovie>
  )
}

export default Movies;