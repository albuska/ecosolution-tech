import PropTypes from 'prop-types';
import { MainTextStyled } from './MainText.styled';

export const MainText = ({ text }) => {
  return <MainTextStyled>{text}</MainTextStyled>;
};

MainText.propTypes = {
  text: PropTypes.string.isRequired
};
