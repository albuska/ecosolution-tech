import { styled } from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/selectMediaRequests';

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);

  @media ${selectTablet} {
    justify-content: end;
  }
`;

export const MenuBurgerContainer = styled.div`
  background-color: rgba(23, 61, 51, 0.75);
  border-radius: 25px;
  position: absolute;
  top: 20px;
  bottom: 20px;
  width: 310px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${selectTablet} {
  right: 30px;
  top: 42px;
  }

  @media ${selectDesktop} {
  right: 100px;
  top: 30px;
  }
`;

export const IconCloseContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const IconText = styled.p`
  color: ${({ theme }) => theme.colors.whiteTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const LineBox = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.whiteTextColor};
  margin-top: 6px;
`;

export const PointsList = styled.ul`
  margin-top: 22px;
`;

export const ItemPoints = styled.li`
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin-top: 8px;

  &:hover svg > use,
  &:focus svg > use {
    stroke: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const ItemText = styled.p`
  color: ${({ theme }) => theme.colors.whiteTextColor};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: -0.96px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

