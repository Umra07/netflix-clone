import CustomLogo from '../../UI/CustomLogo';
import { ListWrapper, NavWrapper } from './style';

const menu = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages'];

const NavList = () => {
  return (
    <NavWrapper>
      <CustomLogo />
      <ListWrapper>
        {menu.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ListWrapper>
    </NavWrapper>
  );
};

export default NavList;
