import PropTypes from 'prop-types';
import { LineContainer } from './Line.styled';

export const Line = ({ width, marginBottom}) => {
  return <LineContainer style={{ width: width || '100%', marginBottom }}></LineContainer>;
};

Line.propTypes = {
  width: PropTypes.number,
  marginBottom: PropTypes.number
};
