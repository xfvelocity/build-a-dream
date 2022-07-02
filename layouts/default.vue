<template>
  <v-app>
    <ContactBar v-if="!isMobile" />
    <NavBar />
    <v-main class="pa-0">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { isMobile, setWidthValues } from "@/utility/width";
import { projects } from "@/assets/data/project.data";
import { Project } from "@/assets/types/app.types";

import MobileNavBar from "../components/nav-bar/MobileNavBar.vue";
import NavBar from "../components/nav-bar/NavBar.vue";
import ContactBar from "../components/nav-bar/ContactBar.vue";
import Footer from "../components/footer/Footer.vue";

export default defineComponent({
  name: "default",
  components: {
    NavBar,
    MobileNavBar,
    ContactBar,
    Footer,
  },
  setup() {
    const projectsList: Project[] = projects;

    onMounted(() => {
      setWidthValues(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidthValues(window.innerWidth);
      });
    });

    const preloadImages = (): void => {
      projectsList.forEach((item) =>
        item.detailedImgList.forEach(
          (url) => (new Image().src = `./img/${url}.jpg`)
        )
      );
    };

    onBeforeMount(preloadImages);

    return {
      isMobile,
    };
  },
});
</script>
