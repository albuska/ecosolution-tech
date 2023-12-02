import { styled } from "styled-components";
import {
  selectDesktop,
  selectTablet,
} from "../../../utils/selectMediaRequests";

export const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 16px;

  @media ${selectTablet} {
    margin-top: 0;
    width: 50%;
  }
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

export const ButtonOverlay = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 12px;
  }
`;

export const MobileOverlayText = styled.div`
  @media ${selectTablet} {
    display: none;
  }
`;

export const MainQuestionsBox = styled.div`
  @media ${selectTablet} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
  }

  @media ${selectDesktop} {
    justify-content: space-between;
  }
`;

export const QuestionsTitleOverlay = styled.div`
  @media ${selectTablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ButtonBox = styled.div`
  @media ${selectTablet} {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`
