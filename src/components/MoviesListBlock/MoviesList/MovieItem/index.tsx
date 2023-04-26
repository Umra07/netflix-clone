import { FC, useState } from 'react';
import { MovieItemCard } from './style';
import getPosterUrl from '../../../../getPosterUrl';
import { MovieTypes } from '../../../../redux/slices/mainPage/types';

import emptyPoster from '../../../../assets/poster-holder.jpg';

const MovieItem: FC<MovieTypes> = ({ poster_path, title, onClick }) => {
  return (
    <MovieItemCard onClick={onClick}>
      {poster_path ? (
        <img src={poster_path && getPosterUrl('w300', poster_path)} alt="" />
      ) : (
        <>
          <img src={emptyPoster} alt="Poster not available" />
        </>
      )}
    </MovieItemCard>
  );
};

export default MovieItem;
