import { styled } from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/selectMediaRequests';

export const SecondTitleStyled = styled.h2`
color: ${({ theme }) => theme.colors.mainTextColor};
font-family: ${({ theme }) => theme.fonts.regularOswald};
font-size: ${({ theme }) => theme.fontSizes.xxxl};
line-height: 1.0; 
text-transform: uppercase;   

@media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.big};    
}

@media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.huge};    
}
`
