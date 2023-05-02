import { FC, useEffect, useRef, useState } from 'react';
import { BottomBackdrop, BottomButton, SimilarMoviesWrapper } from './style';
import { fetchSimilarMovies } from '../../../../../redux/slices/mainPage/mainPageAsync';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../redux/store';
import getPosterUrl from '../../../../../getPosterUrl';

interface ModalSimilarMoviesProps {
  id: number;
}

const ModalSimilarMovies: FC<ModalSimilarMoviesProps> = ({ id }) => {
  const similarMovies = useSelector((state: RootState) => state.main.similarMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(fetchSimilarMovies({ id, page }));
      setPage((prev) => prev + 1);
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  const handleClick = () => {
    dispatch(fetchSimilarMovies({ id, page }));
  };

  return (
    <SimilarMoviesWrapper>
      <h3>More like this</h3>
      <ul>
        {similarMovies.map((movie) => (
          <li key={movie.id}>
            <img
              src={getPosterUrl('w300', movie.poster_path || './src/assets/poster-holder.jpg')}
            />
          </li>
        ))}
      </ul>
      <BottomBackdrop>
        <button onClick={handleClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
              fill="currentColor"></path>
          </svg>
        </button>
      </BottomBackdrop>
    </SimilarMoviesWrapper>
  );
};

export default ModalSimilarMovies;
