import { FC, useEffect } from 'react';
import { InviteSection } from './style';
import Content from './Content';
import getPosterUrl from '../../getPosterUrl';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchInviteRandomMovie } from '../../redux/slices/mainPage/mainPageAsync';
import { useSelector } from 'react-redux';

import backgroundImg from '../../assets/main-bg.jpg';
import StartMembership from './StartMembership';
import { MovieTypes } from '../../redux/slices/mainPage/types';

const API_KEY = import.meta.env.VITE_API_KEY;

interface InviteProps {
  inviteMovie?: MovieTypes;
}

const Invite: FC<InviteProps> = ({ inviteMovie }) => {
  const loggedIn = true;

  return (
    <InviteSection>
      {/* <img src={} alt="background image" /> */}
      {loggedIn ? (
        <Content
          trailerUrl={inviteMovie?.trailer && inviteMovie.trailer.key}
          title={inviteMovie?.original_title}
          description={inviteMovie?.overview}
        />
      ) : (
        <StartMembership />
      )}
    </InviteSection>
  );
};

export default Invite;
