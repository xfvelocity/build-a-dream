<template>
  <nav>
    <v-card :height="80" id="nav-bar">
      <v-app-bar :height="80">
        <div class="pb-2 d-flex align-center max-width w-100 px-12">
          <img
            class="cursor-pointer"
            src="@/assets/img/build-a-dream-logo.png"
            alt="Build A-Dream logo"
            @click="$router.push('/')"
          />

          <v-spacer />

          <div class="d-flex">
            <span
              class="internal-link mr-3"
              v-for="(link, i) in navLinks"
              :key="i"
              @click="$router.push(link.link)"
            >
              {{ link.name }}
            </span>
          </div>
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
