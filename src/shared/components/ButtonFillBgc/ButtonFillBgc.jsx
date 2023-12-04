import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { ButtonFill, IconBtnBox } from "./ButtonFillBgc.styled";

export const ButtonFillBgc = ({ text, scrollToContact }) => {
 
  return (
    <ButtonFill onClick={scrollToContact}>
      {text}
       <IconBtnBox   style={{ transform: 'rotate(130deg)'}}>
          <Icon
            iconName={"icon-arrow-up"}
            width={8}
            height={9}
            fill={"#173D33"}
          />
       </IconBtnBox>

    </ButtonFill>
  );
};

ButtonFillBgc.propTypes = {
  text: PropTypes.string.isRequired,
  scrollToContact: PropTypes.func
};
