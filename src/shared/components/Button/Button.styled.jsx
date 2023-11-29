import { styled } from 'styled-components';

export const BtnStyled = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  background-color: transparent;
  border-radius: 500px;
  padding: 4px 2px 4px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.p`
  ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.1;
  margin-right: 8px;
`;

export const IconBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
