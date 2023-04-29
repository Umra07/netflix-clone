import styled from 'styled-components';

interface ModalProps {
  width?: string;
}

interface PosterProps {
  img: string;
}

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  overflow-y: scroll;
  font-size: 14px;

  h2 {
    font-size: 26px;
  }
`;

export const ModalBody = styled.div<ModalProps>`
  position: relative;
  background-color: #141414;
  height: fit-content;
  padding-bottom: 50px;
  width: ${(props) => props.width};
  animation: blockEntrance 0.5s ease-in;

  @keyframes blockEntrance {
    from {
      opacity: 0;
      transform: translateY(10vh);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Poster = styled.div<PosterProps>`
  background-image: linear-gradient(0deg, rgba(20, 20, 20, 1) 0%, rgba(255, 255, 255, 0) 100%),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  width: 850px;
  height: 60vh;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: #181818;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #404040;
  }
`;
