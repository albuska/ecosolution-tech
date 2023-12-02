import {styled} from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/selectMediaRequests';

export const MainTextStyled = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  letter-spacing: -0.64px;
  text-align: justify;

  @media screen and (max-width: 767px) {
    text-align: center;
    text-align: justify;
  }

  /* @media ${selectTablet} {
    width: 342px;
  }

  @media ${selectDesktop} {
    width: 363px;
  } */

`;