import { AccountMenuWrapper, AccountsList, LogoutBtn, SubmenuList } from './style';

import pencil from '../../../../assets/submenu/pencil.svg';
import smile from '../../../../assets/submenu/smile.svg';
import account from '../../../../assets/submenu/account.svg';
import help from '../../../../assets/submenu/help.svg';

const accountMenu = [
  { img: pencil, name: 'Manage Profiles' },
  { img: smile, name: 'Transfer Profile' },
  { img: account, name: 'Account' },
  { img: help, name: 'Help Center' },
];

const AccountMenu = () => {
  return (
    <AccountMenuWrapper>
      <SubmenuList>
        {accountMenu.map((item, index) => (
          <li key={index}>
            <a href="#">
              <img src={item.img} alt="Menu icon" />
              {item.name}
            </a>
          </li>
        ))}
      </SubmenuList>
      <LogoutBtn>Sign out of Netflix</LogoutBtn>
    </AccountMenuWrapper>
  );
};

export default AccountMenu;
