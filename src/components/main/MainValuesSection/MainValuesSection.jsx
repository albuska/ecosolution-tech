import { MainText } from '../../../shared/components/MainText/MainText';
import { SecondTitle } from '../../../shared/components/SecondTitle/SecondTitle';
import { VALUES } from '../../../constants/globalConstants';
import { Icon } from '../../../shared/components/Icon/Icon';
import { Line } from '../../../shared/components/Line/Line';
import {
  ValuesList,
  ValueItem,
  TitleBox,
  ValueTitle,
  ValueText,
} from './MainValuesSection.styled';

export const MainValuesSection = () => {
  return (
    <section style={{paddingBottom: 36}}>
      <SecondTitle text="Main values of our company" />
      <MainText
        text="EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all.
        We aspire to be at the forefront of the global shift towards renewable energy,
        leading the way in innovative technologies that harness the power 
        of nature to meet the world's energy needs."
      />
      <ValuesList>
        {VALUES.map(item => (
          <ValueItem key={item.id}>
            <TitleBox>
              <Icon
                iconName={item.icon}
                fill={'transparent'}
                stroke={'#173D33'}
                width={16}
                height={16}
              />
              <ValueTitle>{item.title}</ValueTitle>
            </TitleBox>
            <Line />
            <ValueText>{item.text}</ValueText>
          </ValueItem>
        ))}
      </ValuesList>
    </section>
  );
};
