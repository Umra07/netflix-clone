import { FC, useEffect, useRef, useState } from 'react';
import { BackgroundGradient, InviteSection } from './style';
import axios from 'axios';
import useResize from '../../hooks/useResize';
import Content from './Content';
import getPosterUrl from '../../getPosterUrl';
import YouTube from 'react-youtube';
import YTPlayer from '../UI/YTPlayer';

const API_KEY = import.meta.env.VITE_API_KEY;

interface VideoTypes {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key?: string;
  name?: string;
  official?: boolean;
  published_at?: string;
  site?: string;
  size?: number;
  type?: string;
  video?: string;
}

const Invite: FC = () => {
  const [inviteMovie, setInviteMovie] = useState<{
    title: string;
    descr: string;
    videoKey?: string;
    poster: string;
  }>({
    title: '',
    descr: '',
    videoKey: '',
    poster: '',
  });

  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      (async function fetchMovie() {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&append_to_response=videos`,
        );

        console.log(data);

        setInviteMovie({
          title: data.title,
          descr: data.overview,
          poster: data.backdrop_path,
          videoKey: data.videos.results[1].key,
        });
      })();
    } catch (err) {
      console.log('error!');
    }
  }, []);

  const { width, height } = useResize(divEl);

  return (
    <InviteSection imgUrl={getPosterUrl('original', inviteMovie.poster)} ref={divEl} width={width}>
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
