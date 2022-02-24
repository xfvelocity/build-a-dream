export const getWindowWidth = (): number => {
  let windowWidth: number = 0;

  windowWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
  });

  return windowWidth;
};
