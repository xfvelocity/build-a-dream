import { useEffect, useState } from "react";

export const initObserver = (
  elementId: string
): {
  inView: boolean;
} => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);

    const intersectionObserver: IntersectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setInView(entry.isIntersecting)),
      { rootMargin: "-50px" }
    );

    if (element) {
      intersectionObserver.observe(element);
    }
  });

  return {
    inView,
  };
};
