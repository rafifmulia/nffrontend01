import styles from './Movies.module.css';

function Movie(props) {
  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={props.thumb}
        alt=""
      />
      <h3 className={styles.movie__title}>{props.title}</h3>
      <p className={styles.movie__date}>{props.release_date}</p>
    </div>
  )
}

function Movies() {
  const movies = [
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 1",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 2",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 3",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 4",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 1",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 2",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 3",
      release_date: "19 Mar 2022",
    },
    {
      thumb: "https://picsum.photos/600/400",
      title: "MoveMove 4",
      release_date: "19 Mar 2022",
    },
  ];

  const listMovies = movies.map((movie) =>
    <Movie thumb={movie.thumb} title={movie.title} release_date={movie.release_date} />
  )

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Lates Movies</h2>
        <div className={styles.movie__container}>
          {listMovies}
        </div>
      </section>
    </div>
  )
}

export default Movies;