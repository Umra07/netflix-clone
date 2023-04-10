import styled from 'styled-components';

export const LogoLink = styled.a`
  display: inline-block;
  transform: translateX(-12px);

  svg {
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linejoin: round;
    stroke-miterlimit: 2;
    width: 120px;
    height: 60px;
    path {
      width: 92px;
      height: 30px;
      fill: rgb(237, 28, 36);
      fill-rule: nonzero;
    }
  }
`;
