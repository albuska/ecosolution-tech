import { styled } from "styled-components";
import {
  selectDesktop,
  selectTablet,
} from "../../../utils/selectMediaRequests";

export const ElectricityText = styled.p`
  display: flex;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.regularOswald};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 24px;
  align-items: center;

  @media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    gap: 24px;
  }

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.huge};
  }
`;

export const ElectricitySpan = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
  font-family: ${({ theme }) => theme.fonts.boldOswald};
  font-size: ${({ theme }) => theme.fontSizes.huge};
  line-height: 1;
  text-transform: uppercase;

  @media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.mega};
  }

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.megaMax};
  }
`;

export const TitleOverlayElectricity = styled.div`
  @media ${selectTablet} {
    width: 368px;
    margin: 0 auto;
  }

  @media ${selectDesktop} {
    width: 491px;
    margin: 0 auto;
  }
`;
