import PropTypes from "prop-types";
import { Text } from "./InfoText.styled";

export const InfoText = ({ text }) => {
  return <Text>{text}</Text>;
};

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
};
