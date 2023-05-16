import styled from 'styled-components';

interface QuestionCardItemProps {
  isActive: boolean;
}

interface QuestionHeadingProps {
  isActive: boolean;
}

export const QuestionCardItem = styled.li<QuestionCardItemProps>`
  cursor: pointer;

  p {
    font-size: 20px;
    line-height: 1.2;
    transition: grid-template-rows 0.25s ease-in-out;
    display: grid;
    grid-template-rows: ${(props) => (props.isActive ? '1fr' : '0fr')};
    overflow: hidden;
    padding: 1.5rem 2rem;
    background-color: rgb(19, 33, 68);
  }
`;

export const QuestionHeading = styled.div<QuestionHeadingProps>`
  background-color: rgb(19, 33, 68);
  padding: 1.5rem 2rem;
  margin-bottom: ${(props) => (props.isActive ? '2px' : '0')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
  }

  svg {
    transition: transform 0.25s ease-in-out;
    transform: ${(props) => (props.isActive ? 'rotate(45deg)' : 'rotate(0deg)')};
  }
`;
