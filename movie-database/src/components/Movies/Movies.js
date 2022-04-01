import { nanoid } from 'nanoid';
import Movie from '../Movie/Movie';
import styles from './Movies.module.css';
import useMoviesHook from '../../utils/hooks/movies';
import data from '../../utils/constants/data';

function Movies() {
  const [ movies, setMovies ] = useMoviesHook(data);

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "New Movie",
      type: "movie",
      year: "2023",
      poster: "https://picsum.photos/600/400",
    };
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Lates Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  )
}

export default Movies;