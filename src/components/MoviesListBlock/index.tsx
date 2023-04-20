import { useEffect, useState } from 'react';
import { SliderWrapper } from './style';
import axios from 'axios';
import MoviesList from './MoviesList';

const API_KEY = import.meta.env.VITE_API_KEY;

interface ResultTypes {
  page?: number;
  results: MovieTypes[];
  total_pages?: number;
  total_results?: number;
}

export interface MovieTypes {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

const MoviesListBlock = () => {
  const [list, setList] = useState([]);

  const [btnIsShown, setBtnIsShown] = useState<boolean>(false);

  useEffect(() => {
    try {
      (async function fetchMovies() {
        const { data } = await axios.get(
          `
          https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
        );

        console.log(data);
        setList(data.results);
      })();
    } catch (err) {
      console.log('error!');
    }
  }, []);
  return (
    <SliderWrapper onMouseOver={() => setBtnIsShown(true)} onMouseOut={() => setBtnIsShown(false)}>
      <h2>Last Uploads</h2>
      {/* <MoviesList genre={genre} list={list} btnIsShown={btnIsShown} /> */}
    </SliderWrapper>
  );
};

export default MoviesListBlock;
