import { useEffect, useState } from "react";

const useScreenType = () => {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const updateScreenType = () => {
      if (matchMedia("(max-width: 1164px)").matches) setScreenType("mobile");
      else setScreenType("desktop");
    };

    updateScreenType();
    window.addEventListener("resize", updateScreenType);
    return () => window.removeEventListener("resize", updateScreenType);
  }, []);

  return screenType;
};

export default useScreenType;
