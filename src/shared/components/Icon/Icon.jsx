import PropTypes from "prop-types";
import icons from "../../../assets/icons/icons.svg";
import { IconStyled } from "./Icon.styled";

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <IconStyled width={width} height={height}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </IconStyled>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
