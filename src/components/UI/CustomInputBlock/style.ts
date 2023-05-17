import styled from 'styled-components';

interface CustomInputBlockWrapperProps {
  margin?: string;
}

export const CustomInputBlockWrapper = styled.div<CustomInputBlockWrapperProps>`
  margin-left: ${(props) => (props.margin ? props.margin : '0')};

  h3 {
    line-height: 1.875rem;
    font-size: 2rem;
    font-weight: 400;
    padding-top: 16px;
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
