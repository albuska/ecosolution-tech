import { styled } from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-style: normal;
  margin-top: 24px;
`;

export const LinkPhone = styled.a`
  display: flex;
  margin-top: 8px;
  font-style: normal;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  letter-spacing: -0.8px;
  align-items: center;
  gap: 8px;
`;

export const EmailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
