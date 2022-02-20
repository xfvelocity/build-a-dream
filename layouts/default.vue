<template>
  <v-app>
    <ContactBar v-if="!isMobile"></ContactBar>
    <MobileNavBar v-if="isMobile"></MobileNavBar>
    <NavBar v-if="!isMobile"></NavBar>
    <v-main class="pa-0">
      <nuxt />
    </v-main>
    <Footer :windowWidth="windowWidth"></Footer>
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
  setup(props, context) {
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

<style lang="scss" scoped></style>
