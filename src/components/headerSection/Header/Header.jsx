import { useEffect, useState } from "react";
import { Icon } from "../../../shared/components/Icon/Icon";
import { MenuBurger } from "../MenuBurger/MenuBurger";
import { HeaderContainer, MenuContainer } from "./Header.styled";
import { Logo } from "../../../shared/components/Logo/Logo";
import { ButtonFillBgc } from "../../../shared/components/ButtonFillBgc/ButtonFillBgc";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isTablet = useIsTablet();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const header = document.getElementById('headerId');

    if (offset > 100) {
      setScrolled(true);
      header.style.backgroundColor = '#f3f5fa';
    } else {
      setScrolled(false);
      header.style.backgroundColor = 'transparent'; 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactUsId');
  
    if (contactSection) {
      const contactSectionTop = contactSection.offsetTop;
  
      window.scrollTo({
        top: contactSectionTop,
        behavior: 'smooth',
      });
    }
  };

  return (
      <HeaderContainer id="headerId" style={{ transition: 'background-color 0.3s' }}>
        {openMenu && <MenuBurger handleOpenMenu={handleOpenMenu} />}
        <Logo scrolled={scrolled}/>
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
          {isTablet && <ButtonFillBgc scrollToContact={scrollToContact} text="Get in touch" />}
        </div>
      </HeaderContainer>
  );
};
