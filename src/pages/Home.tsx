import { useSelector } from 'react-redux';
import Invite from '../components/Invite';
import CustomBackground from '../components/UI/CustomBackground';
import { RootState, useAppDispatch } from '../redux/store';
import { useEffect } from 'react';
import { fetchInviteRandomMovie, fetchMoviesGenres } from '../redux/slices/mainPage/mainPageAsync';
import getPosterUrl from '../getPosterUrl';
import MoviesListBlock from '../components/MoviesListBlock';

const Home = () => {
  const dispatch = useAppDispatch();
  const inviteMovie = useSelector((state: RootState) => state.main.inviteMovie);

  useEffect(() => {
    dispatch(fetchInviteRandomMovie());
  }, []);

  useEffect(() => {
    dispatch(fetchMoviesGenres());
  }, []);

  return (
    <>
      <CustomBackground
        url={getPosterUrl('original', inviteMovie?.backdrop_path || "Img didn't found")}
      />
      <Invite inviteMovie={inviteMovie} />
      <MoviesListBlock />
    </>
  );
};

export default Home;
