import styled from 'styled-components';

export const MoviesListContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 5;
    animation: btnOpacity 0.6s ease;
    background-color: rgba(0, 0, 0, 0.4);

    img {
      width: 3vw;
      transition: width 0.15s ease;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);

      img {
        width: 5vw;
      }
    }

    @keyframes btnOpacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const ListWrapper = styled.ul`
  display: flex;
  gap: 5px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
`;

export const LeftButton = styled.button`
  left: 0;
  img {
    transform: rotate(180deg);
  }
`;

export const RightButton = styled.button`
  right: 0;
`;
