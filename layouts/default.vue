<template>
  <v-app>
    <ContactBar v-if="windowWidth >= 960" />
    <MobileNavBar v-if="windowWidth < 960" />
    <NavBar v-else />
    <v-main class="pa-0">
      <slot />
    </v-main>
    <Footer :windowWidth="windowWidth" />
  </v-app>
</template>

<script lang="ts">
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

    const getWindowWidth = (): void => {
      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    };

    onMounted(() => {
      getWindowWidth();
    });

    return {
      windowWidth,
    };
  },
});
</script>
