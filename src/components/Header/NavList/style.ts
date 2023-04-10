import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    opacity: 0.9;
    transition: opacity 0.4s ease;

    &:hover {
      opacity: 0.6;
    }
  }
`;
