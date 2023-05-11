import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  FetchMovieCreditsTypes,
  FetchSimilarMovieResponseTypes,
  GenreTypes,
  MovieTypes,
  MoviesListByGenresTypes,
  VideoTypes,
  fetchMovieKeywordsTypes,
} from './types';
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

      const videos: VideoTypes[] = await axios
        .get(`https://api.themoviedb.org/3/movie/${randomMovie.id}/videos?api_key=${API_KEY}`)
        .then((response) => response.data.results);

      let trailer: VideoTypes = {};

      for (let i = 0; i < videos.length; i++) {
        if ((videos[i].name = 'Official Trailer')) {
          trailer = videos[i];
        }
      }

      randomMovie = { ...moviesList[randomIndex], trailer };
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

  const selectedGenres = genres.filter(
    (genre) =>
      genre.name === 'Action' ||
      genre.name === 'Drama' ||
      genre.name === 'Family' ||
      genre.name === 'Horror',
  );

  return selectedGenres;
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

export const fetchMovieCredits = createAsyncThunk('fetchMovieCredits', async (id: number) => {
  const data = await axios
    .get<FetchMovieCreditsTypes>(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
    )
    .then((res) => res.data);

  const directors = data.crew.filter((person) => person.job === 'Director');
  const writers = data.crew.filter((person) => person.job === 'Writer');

  return { cast: data.cast, directors, writers };
});

export const fetchMovieKeywords = createAsyncThunk('fetchMovieKeywords', async (id: number) => {
  const keywords = await axios
    .get<fetchMovieKeywordsTypes>(
      `
  https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`,
    )
    .then((res) => res.data.keywords);

  return keywords;
});

export const fetchSimilarMovies = createAsyncThunk(
  'fetchSimilarMovies',
  async ({ id, page }: { id: number | undefined; page: number }) => {
    const similarMovies = await axios
      .get<FetchSimilarMovieResponseTypes>(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`,
      )
      .then((res) => res.data.results);

    return similarMovies;
  },
);
