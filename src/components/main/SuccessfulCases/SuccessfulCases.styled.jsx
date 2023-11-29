import { styled } from 'styled-components';

export const SuccessfulCasesSecondBox = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const DateText = styled.p`
  color: rgba(23, 61, 51, 0.25);
  font-family: ${({ theme }) => theme.fonts.lightFira};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  letter-spacing: -1.12px;
`;

export const DateTextSpan = styled.span`
  text-align: justify;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const SliderContainer = styled.li`
  display: ${props => (props.$active ? 'block' : 'none')};
  transition: opacity 0.5s ease;
`;

export const ImgSlider = styled.img`
  width: 100%;
  height: 180px;
  margin: auto;
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
