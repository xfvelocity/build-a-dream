<template>
  <v-app>
    <bd-contact-bar v-if="!isMobile" />
    <bd-nav />

    <v-main class="pa-0">
      <nuxt-page />
    </v-main>

    <bd-footer />
  </v-app>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { isMobile, setWidthValues } from "@/utility/width";

export default defineComponent({
  name: "App",
  setup() {
    // Lifecycle
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
