import { FC, useEffect, useRef, useState } from 'react';
import { InviteSection } from './style';
import axios from 'axios';
import useResize from '../../hooks/useResize';
import Content from './Content';

const API_KEY = import.meta.env.VITE_API_URL;

interface MovieTypes {
  background: string;
  title: string;
  description: string;
}

const Invite: FC = () => {
  const [inviteMovie, setInviteMovie] = useState<MovieTypes>({
    background: '',
    title: '',
    description: '',
  });

  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      (async function fetchMovie() {
        const { data } = await axios.get(`${API_KEY}`);
        console.log(data);

        setInviteMovie({
          title: data.title,
          background: data.backdrop_path,
          description: data.overview,
        });
      })();
    } catch (err) {
      console.log('error!');
    }
  }, []);

  const getPosterUrl = () => {
    return `https://image.tmdb.org/t/p/original${inviteMovie.background}`;
  };

  const { width, height } = useResize(divEl);

  return (
    <InviteSection ref={divEl} width={width} imgUrl={getPosterUrl()}>
      <img src={getPosterUrl()} alt={inviteMovie.background} />
      <Content title={inviteMovie.title} description={inviteMovie.description} />
    </InviteSection>
  );
};

export default Invite;
