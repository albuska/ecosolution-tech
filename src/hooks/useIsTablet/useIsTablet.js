import { useState, useEffect } from 'react';

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsTablet = window.visualViewport.width >= 768;

      if (newIsTablet !== isTablet) {
        setIsTablet(newIsTablet);
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isTablet]);

  return isTablet;
};

export default useIsTablet;