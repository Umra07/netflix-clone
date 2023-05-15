import styled from 'styled-components';

export const StartMembershipWrapper = styled.div`
  z-index: 2;
  padding: 200px 0 420px 24px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    max-width: 70vw;
  }

  p {
    padding-top: 8px;
    font-size: 2.2rem;
    font-weight: 600;
  }

  h3 {
    line-height: 1.875rem;
    font-size: 2rem;
    font-weight: 400;
    padding-top: 16px;
  }

  div {
    padding-top: 16px;
  }
`;

export const CustomInputBlock = styled.div`
  display: flex;
  gap: 10px;
`;
