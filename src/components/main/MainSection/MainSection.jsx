import { MainSectionContainer } from './MainSection.styled';
import { RenewableEnergySection } from '../RenewableEnergySection/RenewableEnergySection';
import { MainValuesSection } from '../MainValuesSection/MainValuesSection';
import { SuccessfulCasesSection } from '../SuccessfulCases/SuccessfulCases';
import { ElectricitySection } from '../ElectricitySection/ElectricitySection';
import { QuestionsSection } from '../QuestionsSection/QuestionsSection';
import { ContactSection } from '../ContactSection/ContactSection';

export const MainSection = () => {
  return (
    <MainSectionContainer>
      <RenewableEnergySection />
      <MainValuesSection/>
      <ElectricitySection/>
      <SuccessfulCasesSection/>
      <QuestionsSection/>
      <ContactSection/>
    </MainSectionContainer>
  );
};
