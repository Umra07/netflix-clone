import { createSlice } from '@reduxjs/toolkit';
import { initialStateTypes } from './types';
import { fetchInviteRandomMovie, fetchMoviesByGenres, fetchMoviesGenres } from './mainPageAsync';
const initialState: initialStateTypes = {
  inviteMovie: {},
  genres: [],
  movies: [],
};

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    listAdded(state, action) {
      state.movies.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      //handling fetching movie for hero block
      .addCase(fetchInviteRandomMovie.fulfilled, (state, action) => {
        state.inviteMovie = { ...action.payload };
      })
      .addCase(fetchInviteRandomMovie.rejected, (state) => {
        state.inviteMovie = {};
      })

      // handling fetching genres
      .addCase(fetchMoviesGenres.fulfilled, (state, action) => {
        state.genres = [...action.payload];
      })
      .addCase(fetchMoviesGenres.rejected, (state) => {
        state.genres = [];
      })

      //handling fetching movies
      .addCase(fetchMoviesByGenres.fulfilled, (state, action) => {
        state.movies = [...state.movies, action.payload];
      })
      .addCase(fetchMoviesByGenres.rejected, (state) => {
        state.movies = [];
      });
  },
});

export const { listAdded } = mainPageSlice.actions;

export default mainPageSlice.reducer;
