import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  position: fixed;
  padding-inline: 4%;
  height: 68px;
  width: calc(100vw - 8%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
`;
