import { styled } from "styled-components";

export const VerticalLineStyled = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.accentColor};
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 24px;
`;
