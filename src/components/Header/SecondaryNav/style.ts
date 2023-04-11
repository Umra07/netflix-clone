import styled, { keyframes } from 'styled-components';

export const SecondaryNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AccountMenuBlock = styled.div`
  position: relative;

  .arrow-down {
    position: absolute;
    top: 34px;
    right: 10px;
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const DropdownBtn = styled.button`
  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
  }
`;
