import { FC, useEffect, useRef, useState } from 'react';
import { BackgroundGradient, InviteSection } from './style';
import axios from 'axios';
import useResize from '../../hooks/useResize';
import Content from './Content';
import getPosterUrl from '../../getPosterUrl';
import YouTube from 'react-youtube';
import YTPlayer from '../UI/YTPlayer';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchInviteMovie } from '../../redux/slices/heroSlice/HeroSliceAsync';

const API_KEY = import.meta.env.VITE_API_KEY;

const Invite: FC = () => {
  const dispatch = useAppDispatch();
  const inviteMovie = (state: RootState) => state.hero;

  useEffect(() => {
    dispatch(fetchInviteMovie());
  }, []);

  return (
    <InviteSection imgUrl={getPosterUrl('original', inviteMovie.poster || "Img didn't found")}>
      {/* <img src={} alt="background image" /> */}
      <BackgroundGradient />
      <Content
        videoUrl={inviteMovie.movie?.videoKey}
        title={inviteMovie.movie?.title}
        description={inviteMovie.movie?.descr}
      />
    </InviteSection>
  );
};

export default Invite;
