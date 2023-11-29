import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { NetworksList } from './Networks.styled';

export const Networks = ({ fillFace, fillIns, strokeFace, strokeIns, gap }) => {
  return (
    <NetworksList style={{ gap }}>
      <li>
        <Icon
          iconName={'icon-facebook'}
          fill={fillFace ? fillFace : '#FFFFFF'}
          stroke={strokeFace ? strokeFace : '#FFFFFF'}
          width={24}
          height={24}
        />
      </li>
      <li>
        <Icon
          iconName={'icon-instagram'}
          fill={fillIns ? fillIns : 'transparent'}
          stroke={strokeIns ? strokeIns : '#FFFFFF'}
          width={24}
          height={24}
        />
      </li>
    </NetworksList>
  );
};

Networks.propTypes = {
  fillFace: PropTypes.string,
  fillIns: PropTypes.string,
  strokeFace: PropTypes.string,
  strokeIns: PropTypes.string,
  gap: PropTypes.number,
};
