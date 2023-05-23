import styled from 'styled-components';

interface HeaderWrapperTypes {
  isFixed: boolean;
}

export const HeaderWrapper = styled.header<HeaderWrapperTypes>`
  background: ${(props) =>
    props.isFixed
      ? 'rgba(20,20,20, 1)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)'};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  opacity: rgba(20, 20, 20, 0);
  position: absolute;
  position: ${(props) => (props.isFixed ? 'fixed' : 'absolute')};
  padding-inline: 4%;
  height: 68px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

  animation: ${(props) => (props.isFixed ? 'fixedMenu .5s ease-in-out' : 'none')};

  @keyframes fixedMenu {
    from {
      top: -10px;
      background-color: rgba(20, 20, 20, 0);
    }
    to {
      top: 0;
      background-color: rgba(20, 20, 20, 1);
    }
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
`;
