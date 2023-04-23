import { FC, useEffect } from 'react';
import { BackgroundGradient, InviteSection } from './style';
import Content from './Content';
import getPosterUrl from '../../getPosterUrl';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchInviteMovie } from '../../redux/slices/heroSlice/HeroSliceAsync';
import { useSelector } from 'react-redux';

const API_KEY = import.meta.env.VITE_API_KEY;

const Invite: FC = () => {
  const dispatch = useAppDispatch();
  const inviteMovie = useSelector((state: RootState) => state.hero.movie);

  console.log(inviteMovie);

  useEffect(() => {
    dispatch(fetchInviteMovie());
  }, []);

  return (
    <InviteSection imgUrl={getPosterUrl('original', inviteMovie.poster || "Img didn't found")}>
      {/* <img src={} alt="background image" /> */}
      <BackgroundGradient />
      <Content
        videoUrl={inviteMovie.videoKey}
        title={inviteMovie.title}
        description={inviteMovie.descr}
      />
    </InviteSection>
  );
};

export default Invite;
