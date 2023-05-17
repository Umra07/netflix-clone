import styled from 'styled-components';

interface CustomBackgroundImage {
  url: string;
}

export const CustomBackgroundImage = styled.div<CustomBackgroundImage>`
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  width: 100vw;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  z-index: 1;

  height: 110vh;

  .backdrop {
    height: inherit;
    width: 100vw;
    background: linear-gradient(
      0deg,
      rgba(20, 20, 20, 1) 0%,
      rgba(20, 20, 20, 0.6) 45%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 2;
  }
`;
