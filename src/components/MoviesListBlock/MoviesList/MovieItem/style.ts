import styled from 'styled-components';

export const MovieItemCard = styled.li`
  color: black;
  position: relative;
  z-index: 2;

  img {
    cursor: pointer;
    width: calc(100vw / 8);
    height: inherit;
    aspect-ratio: 11/17;
    object-fit: cover;
    border-radius: 10px;
    transition: all 0.15s ease-in-out;

    &:hover {
      border-radius: 0;
      transform: scale(0.95);
    }
  }
`;
