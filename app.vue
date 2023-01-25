<template>
  <v-app>
    <ContactBar v-if="!isMobile" />
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
    onMounted(() => {
      setWidthValues(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidthValues(window.innerWidth);
      });
    });

    return {
      isMobile,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
