import Movie from '../Movie';
import styles from './Movies.module.css';
import StyledMovie from './Movies.styled';

function Movies(props) {
  const movies = props.movies;

  return (
    <StyledMovie>
      <section>
        <h2>{ props.title || 'Latest Movie' }</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </section>
    </StyledMovie>
  )
}

export default Movies;