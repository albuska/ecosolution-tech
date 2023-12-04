import { MainText } from "../../../shared/components/MainText/MainText";
import { SecondTitle } from "../../../shared/components/SecondTitle/SecondTitle";
import { VALUES } from "../../../constants/globalConstants";
import { Icon } from "../../../shared/components/Icon/Icon";
import { Line } from "../../../shared/components/Line/Line";
import {
  ValuesList,
  ValueItem,
  TitleBox,
  ValueTitle,
  ValueText,
  TextOverlay,
  ValuesTextOverlay,
  SecondTitleValuesOverlay,
  ListContainer,
  Img,
} from "./MainValuesSection.styled";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";
import { VerticalLine } from "../../../shared/components/VerticalLine/VerticalLine";
import { SectionStyled } from "../../GlobalStyle/GlobalStyle";
import useIsDesktop from "../../../hooks/useIsDesktop/useIsDesktop";

export const MainValuesSection = () => {
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop(); 

  return (
    <SectionStyled id="aboutId">
      <ValuesTextOverlay>
        <SecondTitleValuesOverlay>
          <SecondTitle text="Main values of our company" />
        </SecondTitleValuesOverlay>
        <TextOverlay>
          {isTablet && <VerticalLine />}
          <MainText
            text="EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all.
            We aspire to be at the forefront of the global shift towards renewable energy,
            leading the way in innovative technologies that harness the power 
            of nature to meet the world's energy needs."
          />
        </TextOverlay>
      </ValuesTextOverlay>
      <ListContainer>
        <ValuesList>
          {VALUES.map((item) =>
            item.type === "img" ? (
              <ValueItem key={item.id}>
                <picture>
                  <source
                    srcSet={(item.imageDesk1x, item.imageDesk2x)}
                    media="(min-width: 1280px)"
                  />
                  <source
                    srcSet={(item.imageTabl1x, item.imageTabl2x)}
                    media="(min-width: 768px) and (max-width: 1279px)"
                  />
                  <Img
                    src={item.imageDesk1x}
                    alt="ValueImg"
                    loading="lazy"
                  />
                </picture>
              </ValueItem>
            ) : (
              <ValueItem key={item.id}>
                <TitleBox>
                  <Icon
                    iconName={item.icon}
                    fill={"transparent"}
                    stroke={"#173D33"}
                    width={isDesktop ? 24 : 16}
                    height={isDesktop ? 24 : 16}
                  />
                  <ValueTitle>{item.title}</ValueTitle>
                </TitleBox>
                <Line />
                <ValueText>{item.text}</ValueText>
              </ValueItem>
            )
          )}
        </ValuesList>
      </ListContainer>
    </SectionStyled>
  );
};
