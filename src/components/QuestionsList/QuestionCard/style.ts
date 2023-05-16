import styled from 'styled-components';

interface QuestionCardItemProps {
  isActive: boolean;
}

export const QuestionCardItem = styled.li<QuestionCardItemProps>`
  cursor: pointer;

  h2 {
    background-color: rgb(19, 33, 68);
    padding: 1rem;
    margin-bottom: ${(props) => (props.isActive ? '2px' : '0')};
  }

  p {
    padding: 1rem;
    background-color: rgb(19, 33, 68);
    /* transition: grid-template-rows 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s;
    display: grid;
    grid-template-rows: ${(props) => (props.isActive ? '1fr' : '0fr')}; */
    max-height: ${(props) => (props.isActive ? '100%' : '0')};
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
  }
`;
