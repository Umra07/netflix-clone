import styled from 'styled-components';

interface AppContainerProps {
  width?: number;
}

export const AppContainer = styled.div<AppContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #141414;
`;
