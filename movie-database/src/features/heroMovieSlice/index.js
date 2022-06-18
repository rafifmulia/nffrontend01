import { createSlice } from '@reduxjs/toolkit';
import data from '../../utils/constants/data';

// generate action and reducer
const heroMovieSlice = createSlice({
  name: 'Hero Movie Slice',
  initialState: {
    movie: data[0],
  },
  reducers: {
    updateMovie(state, action) {
      state.movie = action.payload;
    },
  }
});

// generate action and reducer
const heroMovieReducers = heroMovieSlice.reducer;
const { updateMovie } = heroMovieSlice.actions;

export default heroMovieReducers;
export { updateMovie };