import { ref } from "vue";
import { debounce } from "./generic";

const isMobile = ref<boolean>(false);
const isTablet = ref<boolean>(false);
const isDesktop = ref<boolean>(false);
const windowWidth = ref<number>(0);

const setWidthValues = debounce((width: number): void => {
  windowWidth.value = width;
  isMobile.value = width < 769;
  isTablet.value = width >= 769 && width < 1340;
  isDesktop.value = width >= 1340;
}, 100);

export { isMobile, isTablet, isDesktop, windowWidth, setWidthValues };
