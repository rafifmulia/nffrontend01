import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";
import Image from '../ui/Image';
import ENDPOINTS from '../../utils/constants/endpoints';

// Component Movie menerima props
function Movie(props) {
	// Melakukan destructing props
	const { movie } = props;
	const IMG_PATH = ENDPOINTS.IMG_PATH;

	return (
		<StyledMovie>
			<Image
				src={movie.poster || `${IMG_PATH}${movie.poster_path}`}
				alt={movie.title}
			/>
			<Link to={`/movie/${movie.id}`}>
				<h3>{movie.title}</h3>
			</Link>
			<p>{movie.genre || ''} - {movie.year || movie.release_date}</p>
			<p><small>{movie.title}</small></p>
		</StyledMovie>
	);
}

export default Movie;