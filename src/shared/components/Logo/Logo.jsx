import LogoEcoImage from '../../../assets/images/ecosolution.png';
import LogoGreenImage from '../../../assets/images/GREENERGY-FOR-LIFE.png';
import { Icon } from '../Icon/Icon';
import {LogoContainer} from './Logo.styled'; 

export const Logo = () => {
    return (
        <LogoContainer>
        <Icon iconName={'icon-logo'} width={31} height={18} />
        <img src={LogoEcoImage} alt="LogoEcoImage" width={170} />
        <img src={LogoGreenImage} alt="LogoGreenImage" width={60} />
      </LogoContainer>  
    )      
}