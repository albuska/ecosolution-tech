import { useState } from "react";
import { Icon } from "../../../shared/components/Icon/Icon";
import { MenuBurger } from "../MenuBurger/MenuBurger";
import { HeaderContainer, MenuContainer } from "./Header.styled";
import { Logo } from "../../../shared/components/Logo/Logo";
import { ButtonFillBgc } from "../../../shared/components/ButtonFillBgc/ButtonFillBgc";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isTablet = useIsTablet();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <HeaderContainer>
      {openMenu && <MenuBurger handleOpenMenu={handleOpenMenu} />}
      <Logo />
      <div
        style={{
          display: isTablet && "flex",
          alignItems: isTablet && "center",
          gap: isTablet && 12,
        }}
      >
        <MenuContainer onClick={handleOpenMenu}>
          <Icon
            iconName={"icon-menu"}
            stroke={"#292D32"}
            width={16}
            height={16}
          />
        </MenuContainer>
        {isTablet && <ButtonFillBgc text="Get in touch" />}
      </div>
    </HeaderContainer>
  );
};
