<template>
  <nav>
    <v-card :height="80" id="nav-bar">
      <v-app-bar class="py-2 d-flex align-center" :height="80">
        <NuxtLink to="/">
          <img
            src="@/assets/img/build-a-dream-logo.png"
            alt="Build A-Dream logo"
          />
        </NuxtLink>
        <div class="d-flex">
          <NuxtLink
            class="internal-link mr-3"
            v-for="(link, i) in navLinks"
            :key="i"
            :to="link.link"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </v-app-bar>
    </v-card>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavLinks } from "./data/nav.types";
import { navLinksData } from "./data/navLinks";

export default defineComponent({
  name: "NavBar",
  setup() {
    const navLinks: NavLinks[] = navLinksData;

    return {
      navLinks,
    };
  },
});
</script>

<style lang="scss" scoped>
#nav-bar {
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
