import { styled } from "styled-components";

export const ButtonFill = styled.button`
  background-color: ${({ theme }) => theme.colors.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: 500px;
  margin: 0 auto;
`;
