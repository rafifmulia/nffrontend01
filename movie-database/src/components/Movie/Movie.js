import StyledMovie from "./Movie.styled";
import Image from '../ui/Image';

// Component Movie menerima props
function Movie(props) {
	// Melakukan destructing props
	const { movie } = props;

	return (
		<StyledMovie>
			<Image
				src={movie.poster}
				alt={movie.title}
			/>
			<h3>{movie.title}</h3>
			<p>{movie.genre} - {movie.year}</p>
			<p><small>{movie.title}</small></p>
		</StyledMovie>
	);
}

export default Movie;