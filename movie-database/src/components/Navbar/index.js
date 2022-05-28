import { Link } from 'react-router-dom';
import StyledNavbar from './Navbar.styled';

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <div>
            <i className="fa fa-bars"></i>
          </div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar;