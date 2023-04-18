import { FC } from 'react';
import Youtube from 'react-youtube';
import { PlayerContainer } from './style';

interface YTPlayerProps {
  videoKey?: string;
  opts?: {
    width?: string;
    height?: string;
  };
}

const YTPlayer: FC<YTPlayerProps> = ({ videoKey, opts }) => {
  const options = {
    ...opts,
    playerVars: { disableKb: 0 },
  };
  return (
    <PlayerContainer>
      <Youtube className="video" videoId={videoKey} opts={options} />
    </PlayerContainer>
  );
};

export default YTPlayer;
