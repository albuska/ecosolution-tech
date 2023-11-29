import { styled } from 'styled-components';

export const ValuesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 36px;
`;

export const ValueItem = styled.li`
  padding: 12px;
  width: 148px;
  background-color: #eaedf1;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;
`;

export const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.regularOswald};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
  text-transform: uppercase;
`;

export const ValueText = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-align: justify;
  letter-spacing: -0.56px;
`;
