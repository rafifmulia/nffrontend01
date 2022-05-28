import StyledMovie from "./Movie.styled";
import Image from '../ui/Image';

// Component Movie menerima props
function Movie(props) {
	// Melakukan destructing props
	const { movie } = props;
	const IMG_PATH = process.env.REACT_APP_TMDB_IMAGE;

	return (
		<StyledMovie>
			<Image
				src={movie.poster || `${IMG_PATH}${movie.poster_path}`}
				alt={movie.title}
			/>
			<h3>{movie.title}</h3>
			<p>{movie.genre || ''} - {movie.year || movie.release_date}</p>
			<p><small>{movie.title}</small></p>
		</StyledMovie>
	);
}

export default Movie;