import PropTypes from "prop-types";
import { MainTextStyled } from "./MainText.styled";

export const MainText = ({ text, marginTop }) => {
  return (
    <MainTextStyled style={{ marginTop: marginTop || 24 }}>
      {text}
    </MainTextStyled>
  );
};

MainText.propTypes = {
  text: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
};
