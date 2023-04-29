import styled from 'styled-components';

export const SimilarMoviesWrapper = styled.div`
  position: relative;
  padding-top: 50px;
  max-width: 850px;
  margin-bottom: 60px;

  h3 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
    align-items: stretch;
    justify-items: stretch;
    width: calc(850px - 6em);
    overflow: hidden;
  }

  li {
  }

  img {
    background-image: element('similar-movie');
    max-width: 100%;
    object-fit: cover;
    aspect-ratio: 11/17;
  }
`;

export const BottomBackdrop = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 20;
  height: 96px;
  width: 100%;
  border-bottom: 2px solid #404040;
  background-image: linear-gradient(
    0deg,
    #181818 0,
    hsla(0, 0%, 9%, 0.7) 20%,
    hsla(0, 0%, 9%, 0.4) 30%,
    transparent 50%
  );
  margin-top: -6em;

  button {
    display: grid;
    place-items: center;
    background-color: rgba(42, 42, 42, 0.6);
    border: 1px solid hsla(0, 0%, 100%, 0.5);
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);

    &:hover {
      border-color: #fff;
      background-color: rgba(71, 71, 71, 0.8);
    }
  }
`;

export const BottomButton = styled.button``;
