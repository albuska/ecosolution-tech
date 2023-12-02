import { styled } from 'styled-components';

export const LinkStyle = styled.a`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: flex;
  /* margin-top: 8px; */
  justify-content: center;
  font-style: normal;
`;
