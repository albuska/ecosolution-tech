import { styled } from "styled-components";
import {
  selectDesktop,
  selectTablet,
} from "../../../utils/selectMediaRequests";

export const SuccessfulCasesSecondBox = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    padding-top: 24px;
  }

  @media ${selectTablet} {
    gap: 111px;
  }
`;

export const SuccessfulHeaderOverlay = styled.div`
  @media ${selectTablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media ${selectDesktop} {
    margin-bottom: 120px;
  }
`;

export const DateText = styled.p`
  color: rgba(23, 61, 51, 0.25);
  font-family: ${({ theme }) => theme.fonts.lightFira};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  letter-spacing: -1.12px;
`;

export const DateTextSpan = styled.span`
  text-align: justify;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconBox = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.accentColor};  
  }

  &:hover svg > use {
    stroke: ${({ theme }) => theme.colors.accentColor};  
  }
`;

export const IconBoxSlider = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderList = styled.ul`
  margin-top: 19px;
  display: flex;

  @media ${selectTablet} {
    gap: 24px;
  }

  @media ${selectDesktop} {
    gap: 48px;
  }
`;

export const SliderContainer = styled.li`
  display: ${(props) => (props.$active ? "block" : "none")};
  transition: opacity 0.5s ease;

  @media ${selectTablet} {
    width: 50%;
  display: ${(props) => (props.$previous || props.$active ? 'block' : 'none')};
  transition: opacity 0.5s ease;
  }

  /* @media ${selectDesktop} {
    width: 596px;
  } */
`;

export const ImgSlider = styled.img`
  width: 100%;
  margin: auto;

  @media ${selectTablet} {
    /* width: 342px; */
  }

  @media ${selectDesktop} {
    /* width: 100%; */
    /* width: 596px; */
  }
`;

export const SliderTitle = styled.h4`
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  letter-spacing: -0.72px;
  width: 175px;
`;

export const InfoBoxesOverlay = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.secondBackgroundColor};
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoBoxUp = styled(InfoBox)`
  margin-top: 14px;
  margin-bottom: 21px;
`;

export const InfoBoxDown = styled(InfoBox)`
  margin-top: 12px;
`;

export const SliderText = styled.p`
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: -0.48px;
`;

export const SuccessfulTitleOverlay = styled.div`
  width: 260px;

  @media ${selectTablet} {
    width: 378px;
    display: flex;
    align-items: center;
    gap: 90px;
  }

  @media ${selectDesktop} {
    width: 619px;
  }
`;

export const SuccessfulTitleBox = styled.div`
  width: 260px;

  @media ${selectTablet} {
    display: flex;
    align-items: center;
  }

  @media ${selectDesktop} {
    width: 398px;
  }
`;
