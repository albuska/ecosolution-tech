import { Line } from '../../../shared/components/Line/Line';
import { SecondTitle } from '../../../shared/components/SecondTitle/SecondTitle';
import {
  QuestionsList,
  QuestionBox,
  QuestionText,
  AnswerText,
  Text,
  ButtonQuestion
} from './QuestionsSection.styled';
import { QUESTIONS } from '../../../constants/globalConstants';
import { Icon } from '../../../shared/components/Icon/Icon';
import { useState } from 'react';

export const QuestionsSection = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleOpenQuestion = questionId => {
    setOpenQuestionId(prevId => (prevId === questionId ? null : questionId));
  };

  return (
    <section style={{ paddingBottom: 36 }}>
      <SecondTitle text="Frequently Asked Questions" />
      <QuestionsList>
        {QUESTIONS.map(item => (
          <li key={item.id}>
            <Line />
            <QuestionBox>
              <button onClick={() => handleOpenQuestion(item.id)}>
                {openQuestionId === item.id ? (
                  <Icon
                    iconName={'icon-minus'}
                    width={16}
                    height={16}
                    fill={'transparent'}
                    stroke={'#173D33'}
                  />
                ) : (
                  <Icon
                    iconName={'icon-add'}
                    width={16}
                    height={16}
                    fill={'transparent'}
                    stroke={'#97D28B'}
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
      <Text>Didn't find the answer to your question? </Text>
      <ButtonQuestion>
        Contact Us
        <Icon
          iconName={'icon-ellipse'}
          width={14}
          height={14}
          fill={'#173D33'}
        />
      </ButtonQuestion>
    </section>
  );
};
