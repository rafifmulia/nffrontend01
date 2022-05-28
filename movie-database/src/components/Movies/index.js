import Movie from '../Movie';
import styles from './Movies.module.css';
import StyledMovie from './Movies.styled';
import MovieStyledContainer from './MovieContainer.styled';

function Movies(props) {
  const movies = props.movies;

  return (
    <StyledMovie>
      <section>
        <h2>{ props.title || 'Latest Movie' }</h2>
        <MovieStyledContainer>
          {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </MovieStyledContainer>
      </section>
    </StyledMovie>
  )
}

export default Movies;