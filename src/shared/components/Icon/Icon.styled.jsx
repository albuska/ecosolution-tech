import { styled } from "styled-components";

export const IconStyled = styled.svg`
  &:hover > use {
    stroke: ${({ theme }) => theme.colors.accentColor};
  }
`;
