import { styled } from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

export const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.GothicA1Medium};
  font-size: ${({ theme }) => theme.fontSizes.xxxxl};
  letter-spacing: -1.32px;

  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

