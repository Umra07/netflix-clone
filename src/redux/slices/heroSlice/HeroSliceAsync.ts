import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MovieTypes } from './types';

const API_KEY: string = import.meta.env.VITE_API_KEY;

export const fetchInviteMovie = createAsyncThunk('fetchInviteMovie', async () => {
  const { data } = await axios.get<MovieTypes>(
    `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&append_to_response=videos`,
  );
  console.log(data);

  const loadedMovie = {
    title: data.title,
    descr: data.overview,
    poster: data.backdrop_path,
    videoKey: data && data.videos && data.videos.results ? data.videos.results[1].key : '',
  };

  console.log(loadedMovie);

  return loadedMovie;
});
