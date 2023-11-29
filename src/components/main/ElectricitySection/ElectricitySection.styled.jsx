import { styled } from 'styled-components';

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ElectricityText = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.regularOswald};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 24px;
  text-align: center;
`;

export const ElectricitySpan = styled.span`
color: ${({ theme }) => theme.colors.accentColor};
font-family: ${({ theme }) => theme.fonts.boldOswald};
font-size: ${({ theme }) => theme.fontSizes.huge};
line-height: 1; 
text-transform: uppercase;`;
