import styled from 'styled-components';

interface QuestionCardItemProps {
  isActive: boolean;
  answerHeight: number | null;
}

interface QuestionHeadingProps {
  isActive: boolean;
}

export const QuestionCardItem = styled.li<QuestionCardItemProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;

  .answer {
    transition: all 0.25s ease-in-out;
    max-height: ${(props) => (props.isActive ? '200px' : '0')};
    overflow: hidden;
  }

  p {
    overflow: hidden;
    font-size: 20px;
    line-height: 1.2;
    padding: 1.5rem 2rem;
    background-color: rgb(19, 33, 68);
  }
`;

export const QuestionHeading = styled.div<QuestionHeadingProps>`
  background-color: rgb(19, 33, 68);
  padding: 1.5rem 2rem;
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
