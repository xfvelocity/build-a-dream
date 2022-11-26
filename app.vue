<template>
  <v-app>
    <!-- <ContactBar v-if="!isMobile" /> -->
    <NavBar />

    <v-main class="pa-0">
      <NuxtPage />
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { isMobile, setWidthValues } from "@/utility/width";
import { projects } from "@/assets/data/project.data";
import { Project } from "@/assets/types/app.types";

import NavBar from "@/components/nav-bar/NavBar.vue";
import ContactBar from "@/components/nav-bar/ContactBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    ContactBar,
    Footer,
  },
  setup() {
    const projectsList: Project[] = projects;

    const preloadImages = (): void => {
      projectsList.forEach((item) =>
        item.detailedImgList.forEach(
          (url) => (new Image().src = `./img/${url}.jpg`)
        )
      );
    };

    onMounted(() => {
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
