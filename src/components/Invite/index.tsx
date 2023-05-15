import { FC, useEffect } from 'react';
import { InviteSection } from './style';
import Content from './Content';
import getPosterUrl from '../../getPosterUrl';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchInviteRandomMovie } from '../../redux/slices/mainPage/mainPageAsync';
import { useSelector } from 'react-redux';

import backgroundImg from '../../assets/main-bg.jpg';
import StartMembership from './StartMembership';

const API_KEY = import.meta.env.VITE_API_KEY;

const Invite: FC = () => {
  const dispatch = useAppDispatch();
  const inviteMovie = useSelector((state: RootState) => state.main.inviteMovie);

  const loggedIn = false;

  useEffect(() => {
    dispatch(fetchInviteRandomMovie());
  }, []);

  console.log(inviteMovie.poster_path);

  return (
    <InviteSection
      imgUrl={
        loggedIn
          ? getPosterUrl('original', inviteMovie.backdrop_path || "Img didn't found")
          : backgroundImg
      }>
      {/* <img src={} alt="background image" /> */}
      {loggedIn ? (
        <Content
          trailerUrl={inviteMovie.trailer && inviteMovie.trailer.key}
          title={inviteMovie.original_title}
          description={inviteMovie.overview}
        />
      ) : (
        <StartMembership />
      )}
    </InviteSection>
  );
};

export default Invite;
