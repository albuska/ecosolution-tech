import { styled } from 'styled-components';

export const SecondTitleStyled = styled.h2`
color: ${({ theme }) => theme.colors.mainTextColor};
font-family: ${({ theme }) => theme.fonts.regularOswald};
font-size: ${({ theme }) => theme.fontSizes.xxxl};
line-height: 1.0; 
text-transform: uppercase;    
`
