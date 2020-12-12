<template>
  <v-card :height="80" id="nav-bar">
    <v-app-bar class="py-2 d-flex align-center" :height="80">
      <div>
        <img src="@/assets/build-a-dream-logo.png" />
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
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
