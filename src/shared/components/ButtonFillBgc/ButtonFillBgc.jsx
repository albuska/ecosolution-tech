import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { ButtonFill } from "./ButtonFillBgc.styled";

export const ButtonFillBgc = ({ text, marginTop}) => {
  return (
    <ButtonFill style={{marginTop}}>
      {text}
      <Icon iconName={"icon-ellipse"} width={14} height={14} fill={"#173D33"} />
    </ButtonFill>
  );
};

ButtonFillBgc.propTypes = {
  text: PropTypes.string.isRequired,
  marginTop: PropTypes.number
};
