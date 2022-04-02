import { useState } from "react";

function useMoviesHook(initMovies) {
  const [movies, setMovies] = useState(initMovies);

  return [movies, setMovies];
}

export default useMoviesHook;