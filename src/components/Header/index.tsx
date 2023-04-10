import NavList from './NavList';
import SecondaryNav from './SecondaryNav';
import { HeaderWrapper } from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <NavList />
      <SecondaryNav />
    </HeaderWrapper>
  );
};

export default Header;
