import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin: 80px auto 40px;
  max-width: 980px;

  ul {
    display: flex;
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
