import styled, { keyframes } from 'styled-components';

export const SecondaryNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DropdownBtn = styled.button`
  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    enable-background: new 0 0 512 512;
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  }
`;
