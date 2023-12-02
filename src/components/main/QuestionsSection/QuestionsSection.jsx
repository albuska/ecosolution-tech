import { Line } from "../../../shared/components/Line/Line";
import { SecondTitle } from "../../../shared/components/SecondTitle/SecondTitle";
import {
  QuestionsList,
  QuestionBox,
  QuestionText,
  AnswerText,
  Text,
  ButtonOverlay,
  MobileOverlayText,
  MainQuestionsBox,
  QuestionsTitleOverlay,
  ButtonBox
} from "./QuestionsSection.styled";
import { QUESTIONS } from "../../../constants/globalConstants";
import { Icon } from "../../../shared/components/Icon/Icon";
import { useState } from "react";
import { ButtonFillBgc } from "../../../shared/components/ButtonFillBgc/ButtonFillBgc";
import { SectionStyled } from "../../GlobalStyle/GlobalStyle";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";

export const QuestionsSection = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const isTablet = useIsTablet();

  const handleOpenQuestion = (questionId) => {
    setOpenQuestionId((prevId) => (prevId === questionId ? null : questionId));
  };

  return (
    <SectionStyled>
      <MainQuestionsBox>
      <QuestionsTitleOverlay>
          <SecondTitle text="Frequently Asked Questions" />
          {isTablet && (
            <ButtonBox>
              <Text>Didn&#39;t find the answer to your question? </Text>
              <ButtonOverlay>
                <ButtonFillBgc text="Contact Us" />
              </ButtonOverlay>
            </ButtonBox>
          )}
      </QuestionsTitleOverlay>
        <QuestionsList>
          {QUESTIONS.map((item) => (
            <li key={item.id}>
              <Line />
              <QuestionBox>
                <button onClick={() => handleOpenQuestion(item.id)}>
                  {openQuestionId === item.id ? (
                    <Icon
                      iconName={"icon-minus"}
                      width={16}
                      height={16}
                      fill={"transparent"}
                      stroke={"#173D33"}
                    />
                  ) : (
                    <Icon
                      iconName={"icon-add"}
                      width={16}
                      height={16}
                      fill={"transparent"}
                      stroke={"#97D28B"}
                    />
                  )}
                </button>
                <QuestionText>{item.question}</QuestionText>
              </QuestionBox>
              {openQuestionId === item.id && (
                <AnswerText>{item.answer}</AnswerText>
              )}
            </li>
          ))}
        </QuestionsList>
      </MainQuestionsBox>
      <MobileOverlayText>
        <Text>Didn&#39;t find the answer to your question? </Text>
        <ButtonOverlay>
          <ButtonFillBgc text="Contact Us" />
        </ButtonOverlay>
      </MobileOverlayText>
    </SectionStyled>
  );
};
