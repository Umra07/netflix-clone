import styled from 'styled-components';

export const CustomInputWrapper = styled.input`
  padding: 16px;
  display: grid;
  place-items: center;
  line-height: 2.2rem;
  transition: color 250ms cubic-bezier(0.5, 0, 0.1, 1) 0s;
  background-color: rgba(22, 22, 22, 0.7);
  border: 1px solid rgba(128, 128, 128, 0.7);
  border-radius: 3px;
  font-size: 20px;
  width: 30vw;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;
