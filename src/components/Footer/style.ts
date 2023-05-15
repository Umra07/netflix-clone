import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin: 80px auto 40px;
  z-index: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  li {
    cursor: pointer;

    &:hover {
      path {
        transition: fill 0.15s ease;
        fill: blueviolet;
      }
    }
  }
`;
