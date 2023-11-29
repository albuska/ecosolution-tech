import PropTypes from 'prop-types';
import { LinkStyle } from './EmailLink.styled';

export const EmailLink = ({ href }) => {
  return (
    <LinkStyle
      href={`mailto:${href}`}
    >
      {href}
    </LinkStyle>
  );
};

EmailLink.propTypes = {
  href: PropTypes.string.isRequired,
};
