import { useState } from 'react';
import { Icon } from '../../../shared/components/Icon/Icon';
import { MenuBurger } from '../MenuBurger/MenuBurger';
import { HeaderContainer, MenuContainer } from './Header.styled';
import { Logo } from '../../../shared/components/Logo/Logo';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <HeaderContainer>
      {openMenu && <MenuBurger handleOpenMenu={handleOpenMenu} />}
     <Logo/>
      <MenuContainer onClick={handleOpenMenu}>
        <Icon
          iconName={'icon-menu'}
          stroke={'#292D32'}
          width={16}
          height={16}
        />
      </MenuContainer>
    </HeaderContainer>
  );
};
