import { styled } from "styled-components";
import {
  selectTablet,
  selectDesktop,
} from "../../../utils/selectMediaRequests";

export const RenewableEnergySectionContainer = styled.section`
  padding-top: 146px;
  padding-bottom: 40px;

  @media ${selectTablet} {
    padding-top: 164px;
  }

  @media ${selectDesktop} {
    padding-top: 200px;
  }
`;

export const RenewableEnergyMainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.regularOswald};
  font-size: ${({ theme }) => theme.fontSizes.big};
  line-height: 1;
  text-transform: uppercase;

  @media ${selectTablet} {
    /* width: 290px; */
    font-size: ${({ theme }) => theme.fontSizes.huge};
  }

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.gigantic};
  }
`;

export const MainImg = styled.div`
  margin: auto;
  margin-top: 30px;

  @media ${selectTablet} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${selectDesktop} {
    margin: auto;
    margin-bottom: 18px;
  }
`;

export const Img = styled.img`
  margin: auto;
  max-width: 319px;

  @media ${selectTablet} {
    max-width: 709px;
  }

  @media ${selectDesktop} {
    max-width: 1242px;
  }
`;
