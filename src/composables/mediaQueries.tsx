import { useState, useEffect } from "react";

interface MediaQueries {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface UseMediaQuery {
  isExtraSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isExtraLarge: boolean;
}

const isMatchingWidth = (size: keyof MediaQueries): boolean => {
  const mediaQueries: MediaQueries = {
    xs: 500,
    sm: 768,
    md: 1024,
    lg: 1366,
    xl: 1440,
  };

  return window.matchMedia(`(min-width:${mediaQueries[size]}px)`).matches;
};

export const useMediaQuery = (): UseMediaQuery => {
  const [isExtraSmall, setIsExtraSmall] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [isExtraLarge, setIsExtraLarge] = useState(false);

  const setSizes = (): void => {
    setIsExtraSmall(isMatchingWidth("xs"));
    setIsSmall(isMatchingWidth("sm"));
    setIsMedium(isMatchingWidth("md"));
    setIsLarge(isMatchingWidth("lg"));
    setIsExtraLarge(isMatchingWidth("xl"));
  };

  useEffect(() => {
    setSizes();

    window.addEventListener("resize", setSizes);
  });

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
  };
};
