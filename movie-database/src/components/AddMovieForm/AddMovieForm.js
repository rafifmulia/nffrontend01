import { nanoid } from 'nanoid';
import styles from './AddMovieForm.module.css';
import useMoviesHook from '../../utils/hooks/movies';
import data from '../../utils/constants/data';

function AddMovieForm() {
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
      <section className={styles.addMovie}>
        <div className={styles.addMovie__left}>
          <img
            className={styles.addMovie__image}
            src="https://picsum.photos/600/400"
            alt=""
          />
        </div>
        <div className={`${styles.addMovie__right} text-start`}>
          <h4 className={styles.addMovie__title}>Add New Movie</h4>
          <form className={styles.addMovie__forms}>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Title</label>
              <input type="text" className={styles.addMovie__forms__input} />
            </div>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Date</label>
              <input type="number" className={styles.addMovie__forms__input} min="1900" max="2099" defaultValue="2022" />
            </div>
            <div className={styles.addMovie__forms__group}>
              <button className={styles.addMovie__forms__button} onClick={handleClick}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm;