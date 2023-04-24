import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GenreTypes, MovieTypes, MoviesListByGenresTypes } from './types';
import { API_KEY } from '../../../constants';

export const fetchInviteRandomMovie = createAsyncThunk(
  'fetchInviteMovie',
  async (_, { rejectWithValue }) => {
    try {
      const moviesList = await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=1`)
        .then((res) => res.data.results);

      // if (!moviesList.ok) {
      //   throw new Error("Can't load movie from the server :(");
      // }

      const randomIndex = Math.floor(Math.random() * moviesList.length);

      let randomMovie: MovieTypes = moviesList[randomIndex];

      console.log(rejectWithValue);

      const videos = await axios
        .get(`https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${API_KEY}`)
        .then((response) => response.data.results);
      // if (!videos.ok) {
      //   throw new Error("Can't load videos from the server :(");
      // }

      randomMovie = { ...moviesList[randomIndex], videos: [...videos] };

      console.log(randomMovie);
      return randomMovie;
    } catch (err: any) {
      console.log(err.message);
      return rejectWithValue(err.message);
    }
  },
);

export const fetchMoviesGenres = createAsyncThunk('fetchMoviesGenres', async () => {
  const {
    data: { genres },
  } = await axios.get<{ genres: GenreTypes[] }>(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
  );

  return genres;
});

export const fetchMoviesByGenres = createAsyncThunk(
  'fetchMoviesByGenres',
  async (genre: { id: number; name: string }) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${genre.id}&include_adult=false`,
    );

    const moviesListByGenre: MoviesListByGenresTypes = {
      genre: genre.id,
      name: genre.name,
      moviesList: data.results,
    };

    return moviesListByGenre;
  },
);
