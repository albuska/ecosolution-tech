import { Button } from "../../../shared/components/Button/Button";
import { InfoText } from "../../../shared/components/InfoText/InfoText";
import { Line } from "../../../shared/components/Line/Line";
import {
  RenewableEnergyMainTitle,
  MainImg,
  Img,
  TextBox,
  MainOverlay,
  TitleOverlay,
  SecondTextBox
} from "./RenewableEnergySection.styled";
import mainImgDesktop1x from "../../../assets/images/mainImage/image-desk.jpg";
import mainImgDesktop2x from "../../../assets/images/mainImage/image-desk@2x.jpg";
import mainImgTablet1x from "../../../assets/images/mainImage/image-tabl.jpg";
import mainImgTablet2x from "../../../assets/images/mainImage/image-tabl@2x.jpg";
import mainImgMobile1x from "../../../assets/images/mainImage/image-mob.jpg";
import mainImgMobile2x from "../../../assets/images/mainImage/image-mob@2x.jpg";
import { MainText } from "../../../shared/components/MainText/MainText";
import { EmailLink } from "../../../shared/components/EmailLink/EmailLink";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";
import { SectionStyled } from "../../GlobalStyle/GlobalStyle";

export const RenewableEnergySection = () => {
  const isTablet = useIsTablet();

  return (
    <SectionStyled>
      <TitleOverlay>
        <RenewableEnergyMainTitle>
          RENEWABLE ENERGY For any task
        </RenewableEnergyMainTitle>
        <MainOverlay>
          <MainText
            text="Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass"
          />
            <Button text="Learn more" type="button" width={141} />
        </MainOverlay>
      </TitleOverlay>
      <Line />
      <TextBox>
        <InfoText text="79005, Ukraine, Lvivstreet. Shota Rustaveli, 7" />
       <SecondTextBox>
          <EmailLink href="office@ecosolution.com" />
          {isTablet && <MainText text="ecosolution &#169; 2023" />}
       </SecondTextBox>
      </TextBox>
      <MainImg>
        <picture>
          <source
            srcSet={(mainImgDesktop1x, mainImgDesktop2x)}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={(mainImgTablet1x, mainImgTablet2x)}
            media="(min-width: 768px) and (max-width: 1279px)"
          />
          <source
            srcSet={(mainImgMobile1x, mainImgMobile2x)}
            media="(max-width: 767px)"
          />
          <Img src={mainImgDesktop1x} alt="HeroImg" loading="lazy" />
        </picture>
      </MainImg>
    </SectionStyled>
  );
};
