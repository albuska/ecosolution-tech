import PropTypes from 'prop-types';
import { Icon } from '../../../shared/components/Icon/Icon';
import {
  Backdrop, 
  MenuBurgerContainer,
  IconCloseContainer,
  IconText,
  LineBox,
  PointsList,
  ItemPoints,
  ItemText,
} from './MenuBurger.styled';
import { POINTS_LIST } from '../../../constants/globalConstants';
import { Networks } from '../../../shared/components/Networks/Networks';

export const MenuBurger = ({handleOpenMenu }) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      const sectionTop = section.offsetTop;
      handleOpenMenu(); 
  
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };
 
  return (
<Backdrop>
      <MenuBurgerContainer>
       <div>
            <IconCloseContainer onClick={handleOpenMenu}>
              <Icon
                iconName={'icon-iconamoon_close-light'}
                stroke={'#FFFFFF'}
                width={20}
                height={20}
              />
              <IconText>close</IconText>
            </IconCloseContainer>
            <LineBox></LineBox>
            <PointsList>
              {POINTS_LIST.map(item => (
                <ItemPoints key={item.id} onClick={() => scrollToSection(item.label)}>
                  <ItemText>{item.value}</ItemText>
                  <Icon
                    iconName={'icon-arrow-up'}
                    fill={'transparent'}
                    stroke={'#FFFFFF'}
                    width={16}
                    height={16}
                    style={{cursor: "pointer"}}
                  />
                </ItemPoints>
              ))}
            </PointsList>
       </div>
       <Networks gap={8}/>
      </MenuBurgerContainer>
</Backdrop>
  );
};

MenuBurger.propTypes = {
    handleOpenMenu: PropTypes.func.isRequired,
}
