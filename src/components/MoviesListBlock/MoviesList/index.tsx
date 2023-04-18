import MovieItem from './MovieItem';
import { LeftButton, ListWrapper, MoviesListContainer, RightButton } from './style';

import arrowSvg from '../../../assets/arrow.svg';
import { MovieTypes } from '..';
import { FC } from 'react';

interface MoviesListProps {
  list: MovieTypes[];
}

const MoviesList: FC<MoviesListProps> = ({ list }) => {
  return (
    <MoviesListContainer>
      <LeftButton>
        <img src={arrowSvg} alt="left arrow" />
      </LeftButton>
      <ListWrapper>
        {list.map((item) => (
          <MovieItem key={item.id} poster_path={item.poster_path} title={item.title} />
        ))}
      </ListWrapper>
      <RightButton>
        <img src={arrowSvg} alt="right arrow" />
      </RightButton>
    </MoviesListContainer>
  );
};

export default MoviesList;
