import { styled } from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
`;
