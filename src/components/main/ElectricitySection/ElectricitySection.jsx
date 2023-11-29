import { SecondTitle } from '../../../shared/components/SecondTitle/SecondTitle';
import {
  VerticalLine,
  ElectricityText,
  ElectricitySpan,
} from './ElectricitySection.styled';

export const ElectricitySection = () => {
  return (
    <section style={{ paddingBottom: 36 }}>
      <SecondTitle
        text="Electricity we produced for all time"
        textAlign={'center'}
      />
      <VerticalLine></VerticalLine>
      <ElectricityText>
        <ElectricitySpan>1233455667</ElectricitySpan> kWh
      </ElectricityText>
    </section>
  );
};
