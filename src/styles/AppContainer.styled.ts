import styled from 'styled-components';

interface AppContainerProps {
  width?: number;
}

export const AppContainer = styled.div<AppContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #141414;
  position: absolute;
  max-width: 100vw;
`;
