import { useEffect, useState } from 'react';

const useScroll = (): { scrollPosition: number; menuIsFixed: boolean } => {
  const [menuIsFixed, setMenuIsFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    }
    window.addEventListener('scroll', handleScroll);

    if (scrollPosition > 20) setMenuIsFixed(true);

    if (scrollPosition < 20) setMenuIsFixed(false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return { scrollPosition, menuIsFixed };
};

export default useScroll;
