// import { useEffect, useState } from "react";
import { SecondTitle } from "../../../shared/components/SecondTitle/SecondTitle";
import { VerticalLine } from "../../../shared/components/VerticalLine/VerticalLine";
import {
  ElectricityText,
  ElectricitySpan,
  TitleOverlayElectricity,
} from "./ElectricitySection.styled";
import useIsTablet from "../../../hooks/useIsTablet/useIsTablet";
import { SectionStyled } from "../../GlobalStyle/GlobalStyle";
import { useEffect, useState } from "react";

export const ElectricitySection = () => {
  const isTablet = useIsTablet(); 

  const numberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const initialCounterValue = 1111111111;
  const [counter, setCounter] = useState(initialCounterValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedNumber = numberWithDots(counter);

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
        <ElectricitySpan>{formattedNumber}</ElectricitySpan> kWh
      </ElectricityText>
    </SectionStyled>
  );
};
