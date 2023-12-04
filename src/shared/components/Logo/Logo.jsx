import PropTypes from 'prop-types';
import LogoGreenImage from "../../../assets/images/GREENERGY-FOR-LIFE.png";
import { Icon } from "../Icon/Icon";
import { LogoContainer, LogoText } from "./Logo.styled";

export const Logo = ({scrolled}) => {
  return (
    <LogoContainer>
      <Icon iconName={"icon-logo"} width={31} height={18} />
      <LogoText style={{color: scrolled ? '#97D28B' : '#173D33'}}>ecosolution</LogoText>
      <img src={LogoGreenImage} alt="LogoGreenImage" width={60} />
    </LogoContainer>
  );
};

Logo.propTypes = {
  scrolled: PropTypes.bool
};
