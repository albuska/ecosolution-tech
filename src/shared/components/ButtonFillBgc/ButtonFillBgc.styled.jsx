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

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainTextColor};
    color: ${({ theme }) => theme.colors.accentColor};

    &:hover > div {
      background-color: ${({ theme }) => theme.colors.accentColor};
    
    
      &:hover svg > use {
      stroke: ${({ theme }) => theme.colors.accentColor};
      fill: transparent;
    }}
  }
`;

export const IconBtnBox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover svg > use {
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.mainTextColor};
  }
`;
