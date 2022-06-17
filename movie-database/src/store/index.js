import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/moviesSlice";
import heroMovieReducers from "../features/heroMovieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducers,
    heroMovie: heroMovieReducers,
  }
});

export default store;