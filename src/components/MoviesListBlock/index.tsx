import { FC, useEffect, useRef, useState } from 'react';
import { SliderWrapper } from './style';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchMoviesByGenres, fetchMoviesGenres } from '../../redux/slices/mainPage/mainPageAsync';
import { GenreTypes } from '../../redux/slices/mainPage/types';
import MoviesList from './MoviesList';

const getRandomGenres = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const MoviesListBlock = () => {
  const dispatch = useAppDispatch();
  const genres = useSelector((state: RootState) => state.main.genres);
  const moviesList = useSelector((state: RootState) => state.main.movies);

  const [page, setPage] = useState<{ firstList: number; lastList: number }>({
    firstList: 0,
    lastList: 2,
  });

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      for (let i = page.firstList; i < page.lastList; i++) {
        dispatch(fetchMoviesByGenres(genres[i]));
      }

      if (page.firstList === 0) {
        return () => {
          effectRan.current = true;
        };
      }
    }
    effectRan.current = false;
  }, [genres, page, effectRan.current]);

  return (
    <SliderWrapper>
      {moviesList.map((list) => (
        <ul key={list.genre}>
          <h2>{list.name}</h2>
          <MoviesList key={list.genre} movies={list.moviesList} />
        </ul>
      ))}
      <button
        onClick={() =>
          setPage({
            firstList: page.firstList + 2 < genres.length ? page.firstList + 2 : genres.length,
            lastList: page.lastList + 2 < genres.length ? page.lastList + 2 : genres.length,
          })
        }>
        click
      </button>
    </SliderWrapper>
  );
};

export default MoviesListBlock;
