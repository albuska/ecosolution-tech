import { styled } from 'styled-components';

export const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 16px;
`;

export const QuestionBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const QuestionText = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSizes.ml};
  letter-spacing: -0.72px;
`;

export const AnswerText = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-align: justify;
  letter-spacing: -0.56px;
  width: 296px;
  margin-left: auto;
`;

export const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  letter-spacing: -0.72px;
  margin-top: 36px;
`;

export const ButtonQuestion = styled.button`
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
  margin-top: 12px;
`;
