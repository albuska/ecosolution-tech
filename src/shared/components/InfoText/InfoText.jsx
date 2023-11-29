import PropTypes from 'prop-types';
import { Text } from './InfoText.styled';

export const InfoText = ({text, marginTop}) => {
  return <Text style={{marginTop}}>{text}</Text>;
};

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
  marginTop: PropTypes.number.isRequired,
};
