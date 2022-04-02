import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import useMoviesHook from '../utils/hooks/movies';
import data from '../utils/constants/data';

function Main() {
  const [movies, setMovies] = useMoviesHook(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  )
}

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;