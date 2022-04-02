import { ref } from "vue";

const isMobile = ref<boolean>(false);
const isTablet = ref<boolean>(false);
const isDesktop = ref<boolean>(false);
const windowWidth = ref<number>(0);

const setWidthValues = (width: number): void => {
  windowWidth.value = width;
  isMobile.value = width < 769;
  isTablet.value = width >= 769 && width < 1340;
  isDesktop.value = width >= 1340;
};

export { isMobile, isTablet, isDesktop, windowWidth, setWidthValues };
