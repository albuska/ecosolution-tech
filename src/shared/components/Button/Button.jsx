import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { BtnStyled, ButtonText, IconBox } from './Button.styled';

export const Button = ({ text, marginTop, marginBottom }) => {
  return (
    <BtnStyled style={{marginTop, marginBottom}} type="button" >
      <ButtonText>{text}</ButtonText>
      <IconBox>
      <Icon
        iconName={'icon-arrow-right'}
        fill={'transparent'}
        stroke={'#173D33'}
        width={16}
        height={16}
      />
      </IconBox>
    </BtnStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired
  //   onClick: PropTypes.func,
};
