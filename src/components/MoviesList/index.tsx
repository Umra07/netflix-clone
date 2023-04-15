import MovieItem from './MovieItem';
import { MoviesListWrapper } from './style';

const MoviesList = () => {
  return (
    <MoviesListWrapper>
      <MovieItem />
      <MovieItem />
    </MoviesListWrapper>
  );
};

export default MoviesList;
