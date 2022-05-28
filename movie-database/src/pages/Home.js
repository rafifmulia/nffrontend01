import Hero from "../components/Hero";
import Movies from "../components/Movies";
import AddMovieForm from "../components/AddMovieForm";
import useMoviesHook from '../utils/hooks/movies';
import data from '../utils/constants/data';

function Home() {
  const [movies, setMovies] = useMoviesHook(data);
  
  return (
    <div>
      <Hero />
      <Movies title="Local Movies" movies={movies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default Home;