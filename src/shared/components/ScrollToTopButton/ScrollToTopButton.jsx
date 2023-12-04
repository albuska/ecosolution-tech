// import ScrollToTop from 'react-scroll-up';
import { ContainerScroll } from './ScrollToTopButton.styled';
import { Icon } from '../Icon/Icon';

const ScrollToTopButton = () => {
  
  const scrollToMain = () => {
    const mainSection = document.getElementById('mainId');
  
    if (mainSection) {
      const mainSectionTop = mainSection.offsetTop;
  
      window.scrollTo({
        top: mainSectionTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
        <ContainerScroll onClick={scrollToMain}>
          <Icon
            iconName={'icon-arrow-left'}
            width={16}
            height={16}
            stroke={'#173D33'}
            fill={"transparent"}
          />
        </ContainerScroll>
    </>
  );
};

export default ScrollToTopButton;