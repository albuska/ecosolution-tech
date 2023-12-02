import PropTypes from 'prop-types';
import {VerticalLineStyled} from "./VerticalLine.styled"; 

export const VerticalLine = ({height}) => {
return <VerticalLineStyled style={{height: height || "100%"}}></VerticalLineStyled>
}

VerticalLine.propTypes = {
    height: PropTypes.number
  };