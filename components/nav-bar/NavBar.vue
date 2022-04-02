<template>
  <nav>
    <v-card :height="70">
      <v-app-bar class="px-4 d-flex align-center" :height="70" app>
        <img
          style="height: 100%"
          src="@/assets/img/build-a-dream-logo.png"
          alt="Build A-Dream Logo"
          @click="$router.push('/')"
        />

        <v-spacer />

        <v-app-bar-nav-icon
          v-if="isMobile"
          @click="isNavDrawerOpen = !isNavDrawerOpen"
        />

        <div v-else class="d-flex">
          <span
            class="internal-link mr-3"
            v-for="(link, i) in navLinks"
            :key="i"
            @click="$router.push(link.link)"
          >
            {{ link.name }}
          </span>
        </div>
      </v-app-bar>
    </v-card>

    <mobile-nav-bar :is-open="isNavDrawerOpen && isMobile" />
  </nav>
</template>

<script lang="ts">
import { NavLinks } from "./data/nav.types";
import { navLinksData } from "./data/navLinks";
import { isMobile } from "@/utility/width";
import MobileNavBar from "./MobileNavBar.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    MobileNavBar,
  },
  setup() {
    const isNavDrawerOpen = ref<boolean>(false);

    const navLinks: NavLinks[] = navLinksData;

    return {
      navLinks,
      isNavDrawerOpen,
      isMobile,
    };
  },
});
</script>
