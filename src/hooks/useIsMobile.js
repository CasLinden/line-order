import { useState, useEffect } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", updateIsMobile);
    updateIsMobile();

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;