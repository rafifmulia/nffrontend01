import { createSlice } from '@reduxjs/toolkit';
import data from '../../utils/constants/data';

// generate action and reducer
const moviesSlice = createSlice({
  name: 'Movies Slice',
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      // add movie to movies
      state.movies.push(action.payload);
    },
    updateMovie(state, action) {
      // update all movies
      state.movies = action.payload;
    },
    deleteMovie() {
      // console.log('gabisa di console')
    },
  }
});

// generate action and reducer
const moviesReducers = moviesSlice.reducer;
const { addMovie, updateMovie, deleteMovie } = moviesSlice.actions;

export default moviesReducers;
export { addMovie, updateMovie, deleteMovie };