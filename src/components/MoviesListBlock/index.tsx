import { FC, useEffect, useRef, useState } from 'react';
import { SliderWrapper } from './style';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchMoviesByGenres, fetchMoviesGenres } from '../../redux/slices/mainPage/mainPageAsync';
import { GenreTypes } from '../../redux/slices/mainPage/types';
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

  const [moreGenres, setMoreGenres] = useState<{ firstList: number; lastList: number }>({
    firstList: 0,
    lastList: 2,
  });

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      for (let i = moreGenres.firstList; i < moreGenres.lastList; i++) {
        dispatch(fetchMoviesByGenres(genres[i]));
      }

      if (moreGenres.firstList === 0) {
        return () => {
          effectRan.current = true;
        };
      }
    }
    effectRan.current = false;
  }, [genres, moreGenres, effectRan.current]);

  const listsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (
        listsRef.current &&
        listsRef.current.offsetTop + listsRef.current.offsetHeight <=
          window.innerHeight + window.scrollY
      ) {
        console.log('working');
        setMoreGenres({
          firstList:
            moreGenres.firstList + 2 < genres.length ? moreGenres.firstList + 2 : genres.length,
          lastList:
            moreGenres.lastList + 2 < genres.length ? moreGenres.lastList + 2 : genres.length,
        });
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [listsRef]);

  return (
    <SliderWrapper ref={listsRef}>
      {moviesList.map((list) => (
        <ul key={list.genre}>
          <h2>{list.name}</h2>
          <MoviesList key={list.genre} movies={list.moviesList} />
        </ul>
      ))}
      <button
        onClick={() =>
          setMoreGenres({
            firstList:
              moreGenres.firstList + 2 < genres.length ? moreGenres.firstList + 2 : genres.length,
            lastList:
              moreGenres.lastList + 2 < genres.length ? moreGenres.lastList + 2 : genres.length,
          })
        }>
        click
      </button>
      {modalIsOpened && createPortal(<Modal />, document.body)}
    </SliderWrapper>
  );
};

export default MoviesListBlock;
