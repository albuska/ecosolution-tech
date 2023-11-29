// import ScrollToTop from 'react-scroll-up';
import { ContainerScroll } from './ScrollToTopButton.styled';
import { Icon } from '../Icon/Icon';

const ScrollToTopButton = () => {
  return (
    <div>
      {/* <ScrollToTop showUnder={160}> */}
        <ContainerScroll>
          <Icon
            iconName={'icon-arrow-left'}
            width={16}
            height={16}
            stroke={'#173D33'}
            fill={"transparent"}
          />
        </ContainerScroll>
      {/* </ScrollToTop> */}
    </div>
  );
};

export default ScrollToTopButton;