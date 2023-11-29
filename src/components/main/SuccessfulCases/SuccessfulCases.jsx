import { useState } from 'react';
import { SLIDER_LIST } from '../../../constants/globalConstants';
import { Icon } from '../../../shared/components/Icon/Icon';
import { Line } from '../../../shared/components/Line/Line';
import { SecondTitle } from '../../../shared/components/SecondTitle/SecondTitle';
import {
  DateText,
  DateTextSpan,
  SuccessfulCasesSecondBox,
  SliderContainer,
  IconsBox,
  IconBox,
  IconBoxSlider,
  InfoBoxUp,
  InfoBoxDown,
  ImgSlider,
  SliderList,
  SliderTitle,
  SliderText,
  InfoBoxesOverlay
} from './SuccessfulCases.styled';

export const SuccessfulCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const addLeadingZero = value => {
    return String(value).padStart(2, '0');
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % SLIDER_LIST.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? SLIDER_LIST.length - 1 : prevIndex - 1
    );
  };

  return (
    <section style={{ paddingBottom: 36 }}>
      <SecondTitle text="Successful cases of our company" />
      <SuccessfulCasesSecondBox>
        <DateText>
          <DateTextSpan>{addLeadingZero(currentIndex + 1)}</DateTextSpan> /
          {addLeadingZero(SLIDER_LIST.length)}
        </DateText>
        <IconsBox>
          <IconBox onClick={prevSlide}>
            <Icon
              iconName={'icon-arrow-left'}
              width={36}
              height={36}
              fill={'transparent'}
              stroke={'#173D33'}
            />
          </IconBox>
          <IconBox onClick={nextSlide}>
            <Icon
              iconName={'icon-arrow-right'}
              width={36}
              height={36}
              fill={'transparent'}
              stroke={'#173D33'}
            />
          </IconBox>
        </IconsBox>
      </SuccessfulCasesSecondBox>
      <SliderList>
        {SLIDER_LIST.map(item => (
          <SliderContainer
            key={item.id}
            $active={item.id === currentIndex}
          >
            <ImgSlider src={item.image} alt={item.title} />
         <InfoBoxesOverlay>
                <InfoBoxUp>
                  <SliderTitle>{item.title}</SliderTitle>
                  <IconBoxSlider>
                    <Icon
                      iconName={'icon-arrow-up'}
                      width={28}
                      height={28}
                      fill={'transparent'}
                      stroke={'#173D33'}
                    />
                  </IconBoxSlider>
                </InfoBoxUp>
                <Line />
                <InfoBoxDown>
                  <SliderText>{item.text}</SliderText>
                  <SliderText>{item.period}</SliderText>
                </InfoBoxDown>
         </InfoBoxesOverlay>
          </SliderContainer>
        ))}
      </SliderList>
    </section>
  );
};
