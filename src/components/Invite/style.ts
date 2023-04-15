import styled from 'styled-components';

interface InviteSectionProps {
  width?: string;
  imgUrl?: string;
}

export const InviteSection = styled.div<InviteSectionProps>`
  position: relative;
  /* background: no-repeat center url(${(props) => props.imgUrl}); */

  img {
    width: 100%;
    z-index: 1;
  }
`;
