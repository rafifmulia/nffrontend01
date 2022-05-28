import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Alert from "../Alert";
import styles from './AddMovieForm.module.css';
import StyledAddMovieForm from "./AddMovieForm.styled";
import genres from '../../utils/constants/genres';
import Button from '../ui/Button';
import Label from '../ui/Label';
import Input from '../ui/Input';
import Image from '../ui/Image';
import FormGroup from "../ui/FormGroup";

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
  const [count, setCount] = useState(0);

  const { title, date, genre, imgUrl } = input;

  /**
   * render(state) dulu baru useEffect(mounting / updating)
   * dilakukan secara sequence tidak pararel
   * 1. diluar useEffect adalah proses render
   * 2. dalam useEffect adalah proses mounting/updating
   */

  // console.log('render 1');

  function effectCount() {
    /**
     * jika update state dilakukan saat proses mounting / updating (maksudnya dialam useEffect)
     * maka akan menghasilkan infinite loop jika tidak menerapkan second parameter (membatasi state yang terkena effect)
     * meskipun sudah menerapkan second parameter, proses render akan menjadi 2x, jika update state didalam effect yang terkena effect
     * second parameter bisa array kosong, artinya tidak ada effect yang dijalankan pada update state manapun
     */
    // console.log('effCount');
    document.title = `count - ${count}`;
    // case jika update state di yang tidak terkena effect, proses render menjadi 2x
    // setInput({ ...input, [title]: { ...input[title], value: "side effect" } });
    // case jika update state pada state yang terkena effect, infinite loop
    // setCount(count + 1);
  }
  // run every init/ mounting (run when reload) and updating (when state get change)
  useEffect(effectCount, [count]);

  // console.log('render 2');

  function hdlChange(ev) {
    const { name, value } = ev.target;
    // tidak terkena effect
    setInput({ ...input, [name]: { ...input[name], value } });
    // terkena effect
    setCount(count + 1);
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
    <StyledAddMovieForm>
      <section>
        <div className={styles.addMovie__left}>
          <Image
            src={input.imgUrl.value}
            alt=""
          />
        </div>
        <div className={`${styles.addMovie__right} text-start`}>
          <h4>Add New Movie</h4>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input type="text" name="title" value={title.value} onChange={hdlChange} />
              {input.title.isError && <Alert>Title Wajib Diisi</Alert>}
            </FormGroup>
            <FormGroup>
              <Label>Date</Label>
              <Input type="number" name="date" min="1900" max="2039" value={date.value} onChange={hdlChange} />
              {input.date.isError && <Alert>Date Wajib Diisi</Alert>}
            </FormGroup>
            <FormGroup>
              <Label>Genre</Label>
              <Input as="select" name="genre" className={`${styles.addMovie__forms__input} ${styles.addMovie__forms__select}`} value={genre.value} onChange={hdlChange}>
                {
                  genres.map((genre) => {
                    return <option key={nanoid()} value={genre.id}>{genre.text}</option>;
                  })
                }
              </Input>
              {input.date.isError && <Alert>Genre Movienya Apa ?</Alert>}
            </FormGroup>
            <FormGroup>
              <Label>Preview Image (URL)</Label>
              <Input type="text" name="imgUrl" value={(imgUrl.value.indexOf('no-image-available.png') > -1) ? "" : input.imgUrl.value} onChange={hdlChange} />
              {input.imgUrl.isError && <Alert>Kok Gaada Preview Imagenya ?</Alert>}
            </FormGroup>
            <FormGroup>
              {/* <button type="submit" className={styles.addMovie__forms__button}>Submit</button> */}
              <Button variant="secondary">Submit</Button>
            </FormGroup>
          </form>
        </div>
      </section>
    </StyledAddMovieForm>
  )
}

export default AddMovieForm;