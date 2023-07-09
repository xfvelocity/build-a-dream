import { useEffect, useState } from "react";

interface InitObserver {
  inView: boolean;
}

export const initObserver = (elementId: string): InitObserver => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(elementId);

    const intersectionObserver: IntersectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        }),
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
