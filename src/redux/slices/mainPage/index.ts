import { createSlice } from '@reduxjs/toolkit';
import { MovieTypes, initialStateTypes } from './types';
import {
  fetchInviteRandomMovie,
  fetchMovieCredits,
  fetchMoviesByGenres,
  fetchMoviesGenres,
} from './mainPageAsync';
const initialState: initialStateTypes = {
  inviteMovie: {},
  genres: [],
  movies: [],
  credits: [],
  modal: {
    isOpened: false,
    movie: {},
  },
};

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    handleModal(state, action: { payload: { isOpened: boolean; movie: MovieTypes } }) {
      state.modal = {
        isOpened: action.payload.isOpened,
        movie: action.payload.movie,
      };
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
      })

      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.credits = [...state.credits, action.payload];
      })
      .addCase(fetchMovieCredits.rejected, (state) => {
        state.credits = [];
      });
  },
});

export const { handleModal } = mainPageSlice.actions;

export default mainPageSlice.reducer;
