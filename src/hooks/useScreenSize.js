import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [xxs, setXxs] = useState(false); // Extra small screen
  const [xs, setXs] = useState(false); // Extra small screen
  const [md, setMd] = useState(false); // Medium screen
  const [lg, setLg] = useState(false); // Large screen

  const responsive = (xxsString, xsString, mdString, lgString) => {
    if (xxs) {
      return xxsString;
    } else if (xs) {
      return xsString;
    } else if (md) {
      return mdString;
    } else {
      return lgString;
    }
  };

  useEffect(() => {
    const updateScreenSize = () => {
      const screenWidth = window.innerWidth;
      setXxs(screenWidth < 500);
      setXs(screenWidth >= 500 && screenWidth < 770);
      setMd(screenWidth >= 770 && screenWidth < 1200);
      setLg(screenWidth >= 1200);
    };

    // Initial update
    updateScreenSize();

    // Update when window is resized
    window.addEventListener("resize", updateScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return { xxs, xs, md, lg, responsive };
};

export default useScreenSize;
