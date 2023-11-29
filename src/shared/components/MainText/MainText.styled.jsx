import {styled} from 'styled-components';

export const MainTextStyled = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  letter-spacing: -0.64px;
  margin-top: 24px;
  text-align: justify;
`;