import MovieItem from './MovieItem';
import { LeftButton, ListWrapper, MoviesListContainer, RightButton } from './style';

import arrowSvg from '../../../assets/arrow.svg';
import { FC, useRef, useState } from 'react';
import { MovieTypes } from '../../../redux/slices/mainPage/types';

interface MoviesListProps {
  movies: MovieTypes[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  const [btnIsShown, setBtnIsShown] = useState<boolean>(true);

  const myRef = useRef<HTMLUListElement>(null);
  const slide = (direction: number) => {
    if (myRef && myRef.current) {
      myRef.current.scrollLeft = myRef.current.scrollLeft + direction;
    }
  };

  return (
    <MoviesListContainer>
      {btnIsShown && (
        <LeftButton onClick={() => slide(-1000)}>
          <img src={arrowSvg} alt="left arrow" />
        </LeftButton>
      )}
      <ListWrapper ref={myRef}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} poster_path={movie.poster_path} title={movie.title} />
        ))}
      </ListWrapper>
      {btnIsShown && (
        <RightButton onClick={() => slide(1000)}>
          <img src={arrowSvg} alt="right arrow" />
        </RightButton>
      )}
    </MoviesListContainer>
  );
};

export default MoviesList;
