import { FC, useEffect, useState } from 'react';
import { ModalContentHeader, ModalContentWrapper, MovieDetails, MovieRating } from './style';
import { MovieTypes } from '../../../../redux/slices/mainPage/types';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../redux/store';
import {
  fetchMovieCredits,
  fetchMovieKeywords,
} from '../../../../redux/slices/mainPage/mainPageAsync';
import ModalSimilarMovies from './ModalSimilarMovies';
import ModalFooter from './ModalFooter';
import CustomList from '../../CustomList';

interface ModalContentProps {
  movie: MovieTypes;
}

const API_KEY = import.meta.env.VITE_API_KEY;

const ModalContent: FC<ModalContentProps> = ({ movie }) => {
  const cast = useSelector((state: RootState) => state.main.credits.cast);
  const genres = useSelector((state: RootState) => state.main.genres);
  const keywords = useSelector((state: RootState) => state.main.keywords);

  let movieGenres = [];

  if (movie.genre_ids) {
    for (let i = 0; i < movie.genre_ids.length; i++) {
      for (let j = 0; j < genres.length; j++) {
        if (movie.genre_ids[i] === genres[j].id) {
          movieGenres.push(genres[j]);
        }
      }
    }
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movie && movie.id) {
      dispatch(fetchMovieCredits(movie.id));
      dispatch(fetchMovieKeywords(movie.id));
    }
  }, []);

  const limitOfListItems: number = 3;

  return (
    <ModalContentWrapper>
      <h2>{movie.title}</h2>
      <ModalContentHeader>
        <MovieRating>
          {movie.vote_average && <li>{movie.vote_average * 10 + '% RATING'}</li>}
          {movie.release_date && <li>{movie.release_date.slice(0, 4)}</li>}
          {movie.runtime && <li>{movie.runtime} h</li>}
          {movie.vote_average && movie.vote_average >= 8 ? (
            <li className="liked">
              <div className="liked-svg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.407 6.25579L13.313 5.50407C13.1342 4.07353 11.9181 3 10.4764 3C10.2133 3 10 3.21331 10 3.47644V6.7132C10 6.90062 9.94733 7.08427 9.848 7.2432L7.90742 10.3481C7.64516 10.7677 7.23665 11.0752 6.76086 11.2112L4.72528 11.7928C4.29598 11.9154 4 12.3078 4 12.7543V18.3161C4 18.6938 4.30618 19 4.68387 19C5.874 19 7.04352 19.3106 8.07684 19.9011L8.25 20C9.39679 20.6553 10.6947 21 12.0156 21H13H16H16.5C17.3284 21 18 20.3284 18 19.5C18 19.1158 17.8556 18.7654 17.6181 18.5H18C18.8284 18.5 19.5 17.8284 19.5 17C19.5 16.4601 19.2147 15.9868 18.7867 15.7226C19.478 15.5888 20 14.9804 20 14.25C20 13.4216 19.3284 12.75 18.5 12.75H18.3294C18.7336 12.4813 19 12.0217 19 11.5C19 10.6716 18.3284 10 17.5 10H13.125L13.407 7.74421C13.4688 7.24999 13.4688 6.75001 13.407 6.25579Z"
                    fill="currentColor"></path>
                </svg>
              </div>
              Most Liked
            </li>
          ) : (
            ''
          )}
          <p>{movie.overview}</p>
        </MovieRating>
        <MovieDetails>
          <CustomList heading="Cast" list={cast} limit={limitOfListItems} />
          <CustomList heading="Genres" list={movieGenres} limit={limitOfListItems} />
          <CustomList heading="This movie is" list={keywords} limit={limitOfListItems} />
        </MovieDetails>
      </ModalContentHeader>
      {movie.id && <ModalSimilarMovies id={movie.id} />}
      <ModalFooter movie={movie} />
    </ModalContentWrapper>
  );
};

export default ModalContent;
