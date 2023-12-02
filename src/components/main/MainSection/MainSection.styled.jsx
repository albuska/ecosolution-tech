import { styled } from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/selectMediaRequests';

export const MainSectionContainer = styled.main`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  margin: 0 auto;

  @media ${selectTablet} {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${selectDesktop} {
    width: 1280px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
