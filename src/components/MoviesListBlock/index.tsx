import { FC, useEffect, useRef, useState } from 'react';
import { SliderWrapper } from './style';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchMoviesByGenres } from '../../redux/slices/mainPage/mainPageAsync';
import MoviesList from './MoviesList';
import Modal from './../UI/Modal';
import { createPortal } from 'react-dom';

const getRandomGenres = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const MoviesListBlock = () => {
  const modalIsOpened = useSelector((state: RootState) => state.main.modal.isOpened);
  const dispatch = useAppDispatch();
  const genres = useSelector((state: RootState) => state.main.genres);
  const moviesList = useSelector((state: RootState) => state.main.movies);

  const effectRan = useRef(false);

  const selectedGenres = genres.filter(
    (genre) =>
      genre.name === 'Action' ||
      genre.name === 'Drama' ||
      genre.name === 'Family' ||
      genre.name === 'Horror',
  );

  useEffect(() => {
    for (let i = 0; i < selectedGenres.length; i++) {
      dispatch(fetchMoviesByGenres(genres[i]));
    }
  }, []);

  return (
    <SliderWrapper>
      {moviesList.map((list) => (
        <ul key={list.genre}>
          <h2>{list.name}</h2>
          <MoviesList key={list.genre} movies={list.moviesList} />
        </ul>
      ))}
      {modalIsOpened && createPortal(<Modal />, document.body)}
    </SliderWrapper>
  );
};

export default MoviesListBlock;
