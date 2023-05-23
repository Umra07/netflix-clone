import { useEffect, useState } from 'react';
import NavList from './NavList';
import SecondaryNav from './SecondaryNav';
import { HeaderWrapper, NavigationWrapper } from './style';
import useScroll from '../../hooks/useScroll';
import CustomLogo from '../UI/CustomLogo';
import CustomButton from '../UI/CustomInputBlock/CustomButton';
import { createPortal } from 'react-dom';
import ModalAuth from './ModalAuth';

const Header = () => {
  const menuIsFixed = useScroll().menuIsFixed;
  const loggedIn = false;

  return (
    <HeaderWrapper isFixed={menuIsFixed}>
      <NavigationWrapper>
        <CustomLogo />
        {loggedIn && <NavList />}
      </NavigationWrapper>
      {loggedIn ? <SecondaryNav /> : <ModalAuth />}
    </HeaderWrapper>
  );
};

export default Header;
