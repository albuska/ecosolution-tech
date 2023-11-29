import PropTypes from 'prop-types';
import { SecondTitleStyled } from './SecondTitle.styled';

export const SecondTitle = ({ text, textAlign }) => {
  return <SecondTitleStyled style={{ textAlign }}>{text}</SecondTitleStyled>;
};

SecondTitle.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string
};
