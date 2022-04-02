import { useState } from "react";
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";
import styles from './AddMovieForm.module.css';
import genres from '../../utils/constants/genres';

function AddMovieForm(props) {
  const { movies, setMovies } = props;
  const defaultImg = "https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png";
  const [input, setInput] = useState({
    title: {
      value: "",
      isError: false,
    },
    date: {
      value: "2022",
      isError: false,
    },
    genre: {
      value: "general",
      isError: false,
    },
    imgUrl: {
      value: defaultImg,
      isError: false,
    },
  });

  function hdlChangeTitle(ev) {
    setInput({ ...input, title: { ...input.title, value: ev.target.value } });
  }

  function hdlChangeDate(ev) {
    setInput({ ...input, date: { ...input.date, value: ev.target.value } });
  }

  function hdlChangeGenre(ev) {
    setInput({ ...input, genre: { ...input.genre, value: ev.target.value } });
  }

  function hdlChangeImgUrl(ev) {
    const value = ev.target.value;
    if (value.trim().length < 1) {
      return setInput({ ...input, imgUrl: { ...input.imgUrl, value: defaultImg } });
    }
    setInput({ ...input, imgUrl: { ...input.imgUrl, value: value } });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    const updtInput = {
      ...input,
    };

    if (input.title.value.trim().length < 1) return setInput({ ...input, title: { ...input.title, isError: true } });;
    updtInput.title.isError = false;
    setInput(updtInput);
    if (input.date.value.trim().length < 1) return setInput({ ...input, date: { ...input.date, isError: true } });;
    updtInput.date.isError = false;
    setInput(updtInput);
    if (input.genre.value.trim().length < 1) return setInput({ ...input, genre: { ...input.genre, isError: true } });;
    updtInput.genre.isError = false;
    setInput(updtInput);
    if (input.imgUrl.value.trim().length < 1 || input.imgUrl.value.indexOf('no-image-available.png') > -1) return setInput({ ...input, imgUrl: { ...input.imgUrl, isError: true } });;
    updtInput.imgUrl.isError = false;
    setInput(updtInput);

    const movie = {
      id: nanoid(),
      title: input.title.value,
      year: input.date.value,
      type: "movie",
      genre: input.genre.value,
      poster: input.imgUrl.value,
    };
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.addMovie}>
        <div className={styles.addMovie__left}>
          <img
            className={styles.addMovie__image}
            src={input.imgUrl.value}
            alt=""
          />
        </div>
        <div className={`${styles.addMovie__right} text-start`}>
          <h4 className={styles.addMovie__title}>Add New Movie</h4>
          <form className={styles.addMovie__forms} onSubmit={handleSubmit}>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Title</label>
              <input type="text" className={styles.addMovie__forms__input} value={input.title.value} onChange={hdlChangeTitle} />
              {input.title.isError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Date</label>
              <input type="number" className={styles.addMovie__forms__input} min="1900" max="2039" value={input.date.value} onChange={hdlChangeDate} />
              {input.date.isError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Genre</label>
              <select className={`${styles.addMovie__forms__input} ${styles.addMovie__forms__select}`} value={input.genre.value} onChange={hdlChangeGenre}>
                {
                  genres.map((genre) => {
                    return <option key={nanoid()} value={genre.id}>{genre.text}</option>;
                  })
                }
              </select>
              {input.date.isError && <Alert>Genre Movienya Apa ?</Alert>}
            </div>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Preview Image (URL)</label>
              <input type="text" className={styles.addMovie__forms__input} value={(input.imgUrl.value.indexOf('no-image-available.png') > -1) ? "" : input.imgUrl.value} onChange={hdlChangeImgUrl} />
              {input.imgUrl.isError && <Alert>Kok Gaada Preview Imagenya ?</Alert>}
            </div>
            <div className={styles.addMovie__forms__group}>
              <button type="submit" className={styles.addMovie__forms__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm;