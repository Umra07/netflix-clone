import { useEffect } from 'react';
import { CloseButton, ModalBody, ModalWrapper, Poster } from './style';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { handleModal } from '../../../redux/slices/mainPage';
import getPosterUrl from '../../../getPosterUrl';
import ModalContent from './ModalMovieContent';

const Modal = () => {
  const modal = useSelector((state: RootState) => state.main.modal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return (): void => {
      document.body.style.overflowY = 'unset';
    };
  }, [modal.isOpened]);

  const movieData = modal.movie;

  return (
    <ModalWrapper
      onClick={() => {
        dispatch(handleModal({ isOpened: !modal.isOpened, movie: {} }));
      }}>
      <ModalBody onClick={(e) => e.stopPropagation()} id="body" width="850px">
        <Poster img={getPosterUrl('original', modal.movie.backdrop_path || "Img didn't found")} />
        <ModalContent movie={{ ...movieData }} />
        <CloseButton
          onClick={() => dispatch(handleModal({ isOpened: !modal.isOpened, movie: {} }))}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="button">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
              fill="currentColor"></path>
          </svg>
        </CloseButton>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
