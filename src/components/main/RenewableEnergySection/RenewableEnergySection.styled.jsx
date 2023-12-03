import { styled } from "styled-components";
import {
  selectTablet,
  selectDesktop,
} from "../../../utils/selectMediaRequests";

export const RenewableEnergyMainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.regularOswald};
  font-size: ${({ theme }) => theme.fontSizes.big};
  line-height: 1;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    margin-top: 146px;
  }

  @media ${selectTablet} {
    width: 290px;
    font-size: ${({ theme }) => theme.fontSizes.huge};
  }

  @media ${selectDesktop} {
    width: 485px;
    font-size: ${({ theme }) => theme.fontSizes.gigantic};
  }
`;

export const TitleOverlay = styled.div`
  @media ${selectTablet} {
    display: flex;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 164px;
    justify-content: space-between;
  }

  @media ${selectDesktop} {
    gap: 296px;
    margin-top: 200px;
  }
`;

export const MainOverlay = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    padding-top: 24px;
    padding-bottom: 24px;
    align-items: center;
    gap: 24px;
  }

  @media ${selectTablet} {
    width: 342px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    justify-content: space-between;
  }

  @media ${selectDesktop} {
    width: 363px;
    gap: 20px;
  }
`;

export const SecondTextBox = styled.div`
  @media ${selectDesktop} {
    display: flex;
    gap: 250px;
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
  /* width: 319px; */
  width: 100%;

  @media ${selectTablet} {
    max-width: 709px;
  }

  @media ${selectDesktop} {
    max-width: 1321px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding-top: 24px;
  }

  @media ${selectTablet} {
    padding-top: 16px;
    padding-bottom: 40px;
  }

  @media ${selectDesktop} {
    padding-top: 12px;
    padding-bottom: 30px;
  }
`;
