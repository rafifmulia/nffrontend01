import { useState, useEffect } from 'react';
import StyledHero from './Hero.styled';
import Button from '../ui/Button';
import Image from '../ui/Image';

function Hero() {
  const [movie, setMovie] = useState("");

  // effect with initial data (mounting only)
  function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    (async function() {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    })();
  }
  useEffect(fetchMovie, []);

  return (
    <StyledHero>
      <section>
        <div>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          {/* <button>Watch</button> */}
          <Button variant="primary" full>Watch</Button>
        </div>
        <div>
          <Image
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  )
}

export default Hero;