import { useEffect, useState } from 'react';
import NavList from './NavList';
import SecondaryNav from './SecondaryNav';
import { HeaderWrapper } from './style';
import useScroll from '../../hooks/useScroll';

const Header = () => {
  const menuIsFixed = useScroll().menuIsFixed;

  return (
    <HeaderWrapper isFixed={menuIsFixed}>
      <NavList />
      <SecondaryNav />
    </HeaderWrapper>
  );
};

export default Header;
