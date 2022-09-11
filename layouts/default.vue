<template>
  <v-app>
    <NavBarContactBar v-if="!isMobile" />
    <NavBar />
    <v-main class="pa-0">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { onBeforeMount } from "vue";
import { isMobile, setWidthValues } from "@/utility/width";
import { projects } from "@/assets/data/project.data";
import { Project } from "@/assets/types/app.types";

export default defineComponent({
  name: "default",

  setup() {
    const projectsList: Project[] = projects;

    const preloadImages = (): void => {
      projectsList.forEach((item) =>
        item.detailedImgList.forEach(
          (url) => (new Image().src = `./img/${url}.jpg`)
        )
      );
    };

    onBeforeMount(() => {
      setWidthValues(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidthValues(window.innerWidth);
      });

      preloadImages();
    });

    return {
      isMobile,
    };
  },
});
</script>
