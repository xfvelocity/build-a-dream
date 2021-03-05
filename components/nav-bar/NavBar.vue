<template>
  <nav>
    <v-card :height="80" id="nav-bar">
      <v-app-bar class="py-2 d-flex align-center" :height="80">
        <div>
          <img
            src="@/assets/img/build-a-dream-logo.png"
            alt="Build A-Dream logo"
          />
        </div>
        <div class="d-flex">
          <span
            v-for="(link, i) in navLinks"
            :key="i"
            class="link mr-3"
            @click="goToLink(link.link)"
            >{{ link.name }}</span
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

  goToLink(link: string): void {
    this.$router.push(link);
  }
}
</script>
<style lang="scss">
#nav-bar {
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
