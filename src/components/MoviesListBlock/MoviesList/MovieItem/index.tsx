import { FC } from 'react';
import { MovieItemCard } from './style';
import { MovieTypes } from '../..';
import getPosterUrl from '../../../../getPosterUrl';

const MovieItem: FC<MovieTypes> = ({ poster_path }) => {
  return (
    <MovieItemCard>
      <img src={poster_path && getPosterUrl('w300', poster_path)} alt="" />
    </MovieItemCard>
  );
};

export default MovieItem;
