import { FC } from 'react';
import { MovieTypes } from '../../../../../redux/slices/mainPage/types';
import { ModalFooterWrapper, MovieDetailsList } from './style';
import CustomList from '../../../CustomList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

interface ModalFooterProps {
  movie: MovieTypes;
}

const ModalFooter: FC<ModalFooterProps> = ({ movie }) => {
  const directors = useSelector((state: RootState) => state.main.credits.directors);
  const writers = useSelector((state: RootState) => state.main.credits.writers);
  const cast = useSelector((state: RootState) => state.main.credits.cast);
  const genres = useSelector((state: RootState) => state.main.genres);
  const keywords = useSelector((state: RootState) => state.main.keywords);

  const limitOfListItems: number = 10;

  return (
    <ModalFooterWrapper>
      <h3>About {movie.title}</h3>
      <MovieDetailsList>
        {directors.length !== 0 && (
          <CustomList heading="Director" list={directors} limit={limitOfListItems} />
        )}
        {cast.length !== 0 && <CustomList heading="Cast" list={cast} limit={limitOfListItems} />}
        {writers.length !== 0 && (
          <CustomList heading="Writers" list={writers} limit={limitOfListItems} />
        )}
        {genres.length !== 0 && (
          <CustomList heading="Genres" list={genres} limit={limitOfListItems} />
        )}
        {keywords.length !== 0 && (
          <CustomList heading="This movies is" list={keywords} limit={limitOfListItems} />
        )}
      </MovieDetailsList>
    </ModalFooterWrapper>
  );
};

export default ModalFooter;
