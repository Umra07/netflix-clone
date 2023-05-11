import { FC, useEffect } from 'react';
import { BackgroundGradient, InviteSection } from './style';
import Content from './Content';
import getPosterUrl from '../../getPosterUrl';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchInviteRandomMovie } from '../../redux/slices/mainPage/mainPageAsync';
import { useSelector } from 'react-redux';

const API_KEY = import.meta.env.VITE_API_KEY;

const Invite: FC = () => {
  const dispatch = useAppDispatch();
  const inviteMovie = useSelector((state: RootState) => state.main.inviteMovie);

  useEffect(() => {
    dispatch(fetchInviteRandomMovie());
  }, []);

  console.log(inviteMovie.poster_path);

  return (
    <InviteSection
      imgUrl={getPosterUrl('original', inviteMovie.backdrop_path || "Img didn't found")}>
      {/* <img src={} alt="background image" /> */}
      <BackgroundGradient />
      <Content
        trailerUrl={inviteMovie.trailer && inviteMovie.trailer.key}
        title={inviteMovie.original_title}
        description={inviteMovie.overview}
      />
    </InviteSection>
  );
};

export default Invite;
