import { SecondTitle } from "../../../shared/components/SecondTitle/SecondTitle";
import { VerticalLine } from "../../../shared/components/VerticalLine/VerticalLine";
import {
  ElectricityText,
  ElectricitySpan,
  TitleOverlayElectricity,
} from "./ElectricitySection.styled";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";
import { SectionStyled } from "../../GlobalStyle/GlobalStyle";

export const ElectricitySection = () => {
  const isTablet = useIsTablet(); 

  return (
    <SectionStyled>
      <TitleOverlayElectricity>
        <SecondTitle
          text="Electricity we produced for all time"
          textAlign={"center"}
        />
      </TitleOverlayElectricity>
      <VerticalLine height={isTablet ? 87 : 48} />
      <ElectricityText>
        <ElectricitySpan>1233455667</ElectricitySpan> kWh
      </ElectricityText>
    </SectionStyled>
  );
};
