import NavList from './NavList';
import SecondaryNav from './SecondaryNav';
import { HeaderWrapper, NavigationWrapper } from './style';
import useScroll from '../../hooks/useScroll';
import CustomLogo from '../UI/CustomLogo';
import ModalAuth from './ModalAuth';

const Header = () => {
  const menuIsFixed = useScroll().menuIsFixed;
  const loggedIn = true;

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
