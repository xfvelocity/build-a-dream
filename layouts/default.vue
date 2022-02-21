<template>
  <v-app>
    <ContactBar v-if="!isMobile" />
    <MobileNavBar v-if="isMobile" />
    <NavBar v-if="!isMobile" />
    <v-main class="pa-0">
      <slot />
    </v-main>
    <Footer :windowWidth="windowWidth" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

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
    const windowWidth = ref<number>(0);

    const isMobile = computed<boolean>(() => windowWidth.value < 960);

    onMounted(() => {
      windowWidth.value = window.innerWidth;

      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    });

    return {
      isMobile,
      windowWidth,
    };
  },
});
</script>
