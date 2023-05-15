import styled from 'styled-components';

interface QuestionCardItemProps {
  isActive: boolean;
}

export const QuestionCardItem = styled.li<QuestionCardItemProps>`
  background-color: blueviolet;
  padding: 1rem;
  cursor: pointer;

  div {
    display: grid;
    grid-template-rows: ${(props) => (props.isActive ? '1fr' : '0fr')};
    transition: grid-template-rows 250ms;
    animation: identifier 500ms 1 ease;
    animation: answerEntrance 500ms 1 ease;

    @keyframes answerEntrance {
      from {
        grid-template-rows: 0fr;
      }
      to {
        grid-template-rows: 1fr;
      }
    }
  }

  p {
    overflow: hidden;
  }
`;
