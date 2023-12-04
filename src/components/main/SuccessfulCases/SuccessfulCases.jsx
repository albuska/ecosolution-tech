import { useState } from "react";
import { SLIDER_LIST } from "../../../constants/globalConstants";
import { Icon } from "../../../shared/components/Icon/Icon";
import { Line } from "../../../shared/components/Line/Line";
import { SecondTitle } from "../../../shared/components/SecondTitle/SecondTitle";
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
  InfoBoxesOverlay,
  SuccessfulTitleOverlay,
  SuccessfulHeaderOverlay,
  SuccessfulTitleBox,
} from "./SuccessfulCases.styled";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";
import { VerticalLine } from "../../../shared/components/VerticalLine/VerticalLine";
import { SectionStyled } from "../../GlobalStyle/GlobalStyle";

export const SuccessfulCasesSection = () => {
  const isTablet = useIsTablet();
  const [currentIndex, setCurrentIndex] = useState(isTablet ? 1 : 0);
  const [previousIndex, setPreviousIndex] = useState(SLIDER_LIST.length - 1);

  const nextSlide = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDER_LIST.length);
  };

  const prevSlide = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SLIDER_LIST.length - 1 : prevIndex - 1
    );
  };

  const addLeadingZero = (value) => {
    return String(value).padStart(2, "0");
  };

  return (
    <SectionStyled id="casesId">
      <SuccessfulHeaderOverlay>
        <SuccessfulTitleOverlay>
          <SuccessfulTitleBox>
            <SecondTitle text="Successful cases of our company" />
          </SuccessfulTitleBox>
          {isTablet && <VerticalLine height={isTablet ? 65 : 96} />}
        </SuccessfulTitleOverlay>

        <SuccessfulCasesSecondBox>
          <DateText>
            <DateTextSpan>{addLeadingZero(currentIndex + 1)}</DateTextSpan> /
            {addLeadingZero(SLIDER_LIST.length)}
          </DateText>
          <IconsBox>
            <IconBox onClick={prevSlide}>
              <Icon
                iconName={"icon-arrow-left"}
                width={36}
                height={36}
                fill={"transparent"}
                stroke={"#173D33"}
              />
            </IconBox>
            <IconBox onClick={nextSlide}>
              <Icon
                iconName={"icon-arrow-right"}
                width={36}
                height={36}
                fill={"transparent"}
                stroke={"#173D33"}
              />
            </IconBox>
          </IconsBox>
        </SuccessfulCasesSecondBox>
      </SuccessfulHeaderOverlay>
      <SliderList>
        {[previousIndex, currentIndex].map((index) => (
          <SliderContainer
            key={SLIDER_LIST[index].id}
            $active={index === currentIndex}
            $previous={index === previousIndex}
            onClick={index === currentIndex ? nextSlide : prevSlide}
          >
            <ImgSlider
              src={SLIDER_LIST[index].image}
              alt={SLIDER_LIST[index].title}
            />
            <InfoBoxesOverlay>
              <InfoBoxUp>
                <SliderTitle>{SLIDER_LIST[index].title}</SliderTitle>
                <IconBoxSlider>
                  <Icon
                    iconName={"icon-arrow-up"}
                    width={28}
                    height={28}
                    fill={"transparent"}
                    stroke={"#173D33"}
                  />
                </IconBoxSlider>
              </InfoBoxUp>
              <Line />
              <InfoBoxDown>
                <SliderText>{SLIDER_LIST[index].text}</SliderText>
                <SliderText>{SLIDER_LIST[index].period}</SliderText>
              </InfoBoxDown>
            </InfoBoxesOverlay>
          </SliderContainer>
        ))}
      </SliderList>
    </SectionStyled>
  );
};
