import styled from 'styled-components';

export const FeatureCardItem = styled.li`
  background: linear-gradient(153.61deg, #e40913 -192.17%, #170f48 80.89%);
  padding: 34px 24px 70px;
  width: 330px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 16px;
    font-size: 22px;
    font-weight: 800;
    line-height: 28px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;
