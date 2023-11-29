import PropTypes from 'prop-types';
import { LineContainer } from './Line.styled';

export const Line = ({ width }) => {
  return <LineContainer style={{ width: width || '100%' }}></LineContainer>;
};

Line.propTypes = {
  width: PropTypes.number,
};
