import styled from 'styled-components';

interface BtnBlockProps {
  background?: string;
  color?: string;
  backgroundHover?: string;
}

export const ContentWrapper = styled.div`
  top: 35vh;
  left: 4%;
  width: 40vw;
  position: absolute;
  color: #fff;

  h1 {
    margin-bottom: 20px;
    font-size: 40px;
    animation: font-scale 3s ease 2s forwards;

    @keyframes font-scale {
      from {
        font-size: 40px;
      }
      to {
        font-size: 60px;
      }
    }
  }

  p {
    font-size: 1.2vw;
    margin-bottom: 15px;
    line-height: 1.3;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 15px;
  }

  div {
    display: flex;
    gap: 20px;
  }
`;

export const BtnBlock = styled.div<BtnBlockProps>`
  padding-inline: 2rem;
  padding-block: 0.8rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${(props) => props.background};
  cursor: pointer;

  b {
    color: ${(props) => props.color};
    font-size: 1.6rem;
    font-weight: 600;
  }

  &:hover {
    background-color: ${(props) => props.backgroundHover};
  }
`;
