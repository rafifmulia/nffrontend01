import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StyledNavbar from './Navbar.styled';

function Navbar() {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({});

  function initData() {
    window.addEventListener('resize', function () {
      (this.innerWidth < 768) ? setToggleNavbarTo(false) : (() => {
        setIsNavbarShow(false);
        setNavbarStyle({});
      })();
    });
  }
  useEffect(initData, []);

  function hdlClckNavbar() {
    if (isNavbarShow) {
      setToggleNavbarTo(false);
      return;
    }
    setToggleNavbarTo(true);
  }

  function setToggleNavbarTo(bool) {
    if (bool) {
      setIsNavbarShow(true);
      setNavbarStyle({
        display: 'block',
      });
      return;
    }
    setIsNavbarShow(false);
    setNavbarStyle({
      display: 'none',
    });
  }

  return (
    <StyledNavbar>
      <nav>
        <div>
          <div onClick={hdlClckNavbar}>
            <i className="fa fa-bars"></i>
          </div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul style={navbarStyle}>
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