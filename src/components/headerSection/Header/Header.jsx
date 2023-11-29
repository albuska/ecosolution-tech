import { useState } from 'react';
import LogoEcoImage from '../../../assets/images/ecosolution.png';
import LogoGreenImage from '../../../assets/images/GREENERGY-FOR-LIFE.png';
import { Icon } from '../../../shared/components/Icon/Icon';
import { MenuBurger } from '../MenuBurger/MenuBurger';
import { HeaderContainer, LogoContainer, MenuContainer } from './Header.styled';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <HeaderContainer>
      {openMenu && <MenuBurger handleOpenMenu={handleOpenMenu} />}
      <LogoContainer>
        <Icon iconName={'icon-logo'} width={31} height={18} />
        <img src={LogoEcoImage} alt="LogoEcoImage" width={170} />
        <img src={LogoGreenImage} alt="LogoGreenImage" width={60} />
      </LogoContainer>
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
