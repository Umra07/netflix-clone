import styled from 'styled-components';

export const MovieItemCard = styled.li`
  color: black;
  position: relative;

  img {
    cursor: pointer;
    width: calc(100vw / 8);
    height: inherit;
    aspect-ratio: 11/17;
    object-fit: cover;
    border-radius: 5px;
  }
`;
