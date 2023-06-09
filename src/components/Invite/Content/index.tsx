import { FC } from 'react';
import { BtnBlock, ContentWrapper, LeftBlock } from './style';
import YTPlayer from '../../UI/YTPlayer';

interface ContentProps {
  trailerUrl?: string;
  title?: string;
  description?: string;
}

const Content: FC<ContentProps> = ({ trailerUrl, title, description }) => {
  const opts = {
    width: '600px',
    height: '337.50px',
  };

  return (
    <ContentWrapper>
      <LeftBlock>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <BtnBlock background="#fff" color="#000" backgroundHover="rgba(255, 255, 255, 0.85)">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Play">
              <path
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                fill="#000"></path>
            </svg>
            <b>Play trailer</b>
          </BtnBlock>
          <BtnBlock
            background="rgba(109, 109, 110, 0.7)"
            backgroundHover="rgba(109, 109, 110, 0.4)">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Info">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="#fff"></path>
            </svg>
            <b>More Info</b>
          </BtnBlock>
        </div>
      </LeftBlock>
      {trailerUrl && <YTPlayer videoKey={trailerUrl} opts={opts} />}
    </ContentWrapper>
  );
};

export default Content;
