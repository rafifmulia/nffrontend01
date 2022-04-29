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

  const { title, date, genre, imgUrl } = input;

  function hdlChange(ev) {
    const { name, value } = ev.target;
    setInput({ ...input, [name]: { ...input[name], value } });
  }

  function validate() {
    const updtInput = {
      ...input,
    };

    if (input.title.value.trim().length < 1) {
      // setInput({ ...input, title: { ...input.title, isError: true } });
      updtInput.title.isError = true;
      setInput(updtInput);
      return false;
    }
    updtInput.title.isError = false;
    setInput(updtInput);
    if (input.date.value.trim().length < 1) {
      // setInput({ ...input, date: { ...input.date, isError: true } });
      updtInput.date.isError = true;
      setInput(updtInput);
      return false;
    }
    updtInput.date.isError = false;
    setInput(updtInput);
    if (input.genre.value.trim().length < 1) {
      // setInput({ ...input, genre: { ...input.genre, isError: true } });
      updtInput.genre.isError = true;
      setInput(updtInput);
      return false;
    }
    updtInput.genre.isError = false;
    setInput(updtInput);
    if (input.imgUrl.value.trim().length < 1 || input.imgUrl.value.indexOf('no-image-available.png') > -1) {
      // setInput({ ...input, imgUrl: { ...input.imgUrl, isError: true } });
      updtInput.imgUrl.isError = true;
      setInput(updtInput);
      return false;
    }
    updtInput.imgUrl.isError = false;
    setInput(updtInput);
    return true;
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: input.title.value,
      year: input.date.value,
      type: "movie",
      genre: input.genre.value,
      poster: input.imgUrl.value,
    };
    setMovies([...movies, movie]);
    return true;
  }

  function resetAddMovieForm() {
    const updtInput = {
      ...input,
    };
    updtInput.title.value = "";
    updtInput.date.value = "";
    updtInput.genre.value = "general";
    updtInput.imgUrl.value = "";
    setInput(updtInput);
    return true;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    validate() && addMovie() && resetAddMovieForm();
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
              <input type="text" name="title" className={styles.addMovie__forms__input} value={title.value} onChange={hdlChange} />
              {input.title.isError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Date</label>
              <input type="number" name="date" className={styles.addMovie__forms__input} min="1900" max="2039" value={date.value} onChange={hdlChange} />
              {input.date.isError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.addMovie__forms__group}>
              <label className={styles.addMovie__forms__label}>Genre</label>
              <select name="genre" className={`${styles.addMovie__forms__input} ${styles.addMovie__forms__select}`} value={genre.value} onChange={hdlChange}>
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
              <input type="text" name="imgUrl" className={styles.addMovie__forms__input} value={(imgUrl.value.indexOf('no-image-available.png') > -1) ? "" : input.imgUrl.value} onChange={hdlChange} />
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