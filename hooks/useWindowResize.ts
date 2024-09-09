import { useState, useEffect } from "react";

// Custom hook to handle window resize and determine if the device is mobile
const useWindowResize = (mobileBreakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Initial check on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileBreakpoint]);

  return isMobile;
};

export default useWindowResize;
