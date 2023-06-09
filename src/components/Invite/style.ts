import styled from 'styled-components';

interface InviteSectionProps {
  width?: string;
  imgUrl?: string;
}

export const InviteSection = styled.div<InviteSectionProps>`
  /* background-image: url(${(props) => props.imgUrl}); */
  z-index: 1;
  padding-inline: 4%;
  display: grid;
  place-items: center;

  /* img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  } */
`;

// export const BackgroundGradient = styled.div`
//   position: absolute;
//   width: inherit;
//   height: inherit;
//   background: rgb(0, 0, 0);
//   background: linear-gradient(
//     0deg,
//     rgba(20, 20, 20, 1) 0%,
//     rgba(20, 20, 20, 0.6) 25%,
//     rgba(255, 255, 255, 0) 100%
//   );
// `;
