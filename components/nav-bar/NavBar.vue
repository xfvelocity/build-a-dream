<template>
  <nav>
    <v-card :height="80" id="nav-bar">
      <v-app-bar class="py-2 d-flex align-center" :height="80">
        <div class="link" @click="goToLink('/')">
          <img
            src="@/assets/img/build-a-dream-logo.png"
            alt="Build A-Dream logo"
          />
        </div>
        <div class="d-flex">
          <span
            v-for="(link, i) in navLinks"
            :key="i"
            class="link nav-link mr-3"
          >
            <NuxtLink :to="link.link">{{ link.name }}</NuxtLink></span
          >
        </div>
      </v-app-bar>
    </v-card>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NavLinks, SocialNavLinks } from "./data/nav.types";
import { navLinks, socialLinks } from "./data/navLinks";

@Component
export default class NavBar extends Vue {
  navLinks: NavLinks[] = navLinks;
  socialLinks: SocialNavLinks[] = socialLinks;
}
</script>
<style lang="scss">
#nav-bar {
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }
  .nav-link {
    a {
      text-decoration: none !important;
    }
  }
}
</style>
