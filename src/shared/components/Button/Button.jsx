import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import { BtnStyled, ButtonText, IconBox } from "./Button.styled";

export const Button = ({ text, marginTop, marginBottom, type, width, marginLeft, marginRight }) => {
  return (
    <BtnStyled style={{ marginTop, marginBottom, width, marginLeft, marginRight }} type={type}>
      <ButtonText>{text}</ButtonText>
      <IconBox>
        <Icon
          iconName={"icon-arrow-right"}
          fill={"transparent"}
          stroke={"#173D33"}
          width={16}
          height={16}
        />
      </IconBox>
    </BtnStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
  marginLeft: PropTypes.any,
  marginBottom: PropTypes.number,
  marginRight: PropTypes.any, 
  type: PropTypes.string.isRequired,
  width: PropTypes.number
};
