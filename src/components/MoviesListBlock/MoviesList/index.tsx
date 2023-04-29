import MovieItem from './MovieItem';
import { LeftButton, ListWrapper, MoviesListContainer, RightButton } from './style';

import arrowSvg from '../../../assets/arrow.svg';
import { FC, useEffect, useRef, useState } from 'react';
import { MovieTypes } from '../../../redux/slices/mainPage/types';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { handleModal } from '../../../redux/slices/mainPage';

interface MoviesListProps {
  movies: MovieTypes[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  const [btnIsShown, setBtnIsShown] = useState<boolean>(false);

  const listRef = useRef<HTMLUListElement>(null);
  const slide = (direction: number) => {
    if (listRef && listRef.current) {
      listRef.current.scrollLeft = listRef.current.scrollLeft + direction;
    }
  };

  const modal = useSelector((state: RootState) => state.main.modal);
  const dispatch = useAppDispatch();

  const handleMovieClick = (movie: MovieTypes) => {
    dispatch(handleModal({ isOpened: !modal.isOpened, movie: movie }));
  };

  return (
    <MoviesListContainer>
      {
        <LeftButton onClick={() => slide(-1000)}>
          <img src={arrowSvg} alt="left arrow" />
        </LeftButton>
      }
      <ListWrapper ref={listRef}>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </ListWrapper>
      {
        <RightButton onClick={() => slide(1000)}>
          <img src={arrowSvg} alt="right arrow" />
        </RightButton>
      }
    </MoviesListContainer>
  );
};

export default MoviesList;
