import styled from 'styled-components';

export const ModalContentWrapper = styled.main`
  padding: 5px 3em;

  h2 {
    font-size: 26px;
    font-weight: 800;
    margin: 10px 0 30px;
  }
`;

export const ModalContentHeader = styled.header`
  display: flex;
  gap: 40px;
  p {
    font-size: 14px;
    line-height: 1.7;
    opacity: 0.9;
  }
`;

export const MovieRating = styled.ul`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;

  li {
    font-size: 16px;
    font-weight: 800;

    &:first-child {
      color: #46d369;
    }
  }

  .liked {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
  }

  .liked-svg {
    background-color: rgb(229, 9, 20);
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }
`;

export const MovieDetails = styled.div`
  max-width: 37%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
