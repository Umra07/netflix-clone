import styled from 'styled-components';

export const AccountMenuWrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid hsla(0, 0%, 100%, 0.15);
  font-size: 13px;
  top: 45px;
  right: 0;
  line-height: 21px;
  opacity: 1;
  transition-duration: 150ms;
  width: 220px;

  div {
    transform: rotate(180deg);
  }
`;

export const AccountsList = styled.ul``;

export const SubmenuList = styled.ul`
  margin-bottom: 10px;

  li {
    padding: 5px 10px;
    line-height: 16px;
    font-size: 13px;

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    display: flex;
    align-items: center;
  }

  img {
    padding-inline: 13px 5px;
  }
`;

export const LogoutBtn = styled.button`
  border-top: 1px solid hsla(0, 0%, 100%, 0.25);
  font-size: 13px;
  line-height: 16px;
  padding-block: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }
`;
