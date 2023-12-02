import { useState, useEffect } from 'react';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsDesktop = window.visualViewport.width >= 1280;

      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop);
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isDesktop]);

  return isDesktop;
};

export default useIsDesktop;