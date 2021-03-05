<template>
  <div>
    <v-card :height="80">
      <v-app-bar class="py-2 d-flex align-center" :height="80" app>
        <v-app-bar-nav-icon @click="toggleNavDrawer" />
        <v-spacer></v-spacer>
        <img
          @click="goToLink('/')"
          src="@/assets/img/build-a-dream-logo.png"
          alt="Build A-Dream Logo"
        />
        <v-spacer></v-spacer>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      style="height: 100vh;"
      class="pt-8"
      v-model="isNavDrawerOpen"
      app
    >
      <template v-slot:prepend>
        <div class="d-flex justify-center">
          <img
            src="@/assets/img/build-a-dream-logo-text.png"
            alt="Build A-Dream Logo"
          />
        </div>
        <hr color="#e5e5e5" style="width: 80%;" class="mx-auto my-8" />
        <v-list>
          <v-list-item
            v-for="(link, i) in navLinks"
            :key="i"
            @click="goToLink(link.link)"
          >
            <v-list-item-content class="justify-center">{{
              link.name
            }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <template v-slot:append>
        <div class="d-flex flex-wrap justify-center my-6" id="nav-bar-footer">
          <div class="mb-4">
            <v-hover v-for="(link, i) in socialLinks" :key="i">
              <v-icon
                slot-scope="{ hover }"
                :color="hover ? 'primary' : ''"
                class="mx-1"
                aria-label="facebook"
                @click="goToSocialLink(link.link)"
                >{{ link.iconName }}</v-icon
              >
            </v-hover>
          </div>
          <p class="disclaimer-text">
            Created by
            <a
              style="text-decoration: none"
              href="https://www.alex-long.co.uk"
              target="_blank"
              >Alex</a
            >
          </p>
          <p class="disclaimer-text">
            &copy; 2021. All rights reserved.
          </p>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { NavLinks, SocialNavLinks } from "./data/nav.types";
import { navLinks, socialLinks } from "./data/navLinks";

@Component
export default class MobileNavBar extends Vue {
  navLinks: NavLinks[] = navLinks;
  socialLinks: SocialNavLinks[] = socialLinks;

  isNavDrawerOpen: boolean = false;

  toggleNavDrawer(): void {
    this.isNavDrawerOpen = !this.isNavDrawerOpen;
  }

  goToLink(link: string): void {
    this.$router.push(link);
  }

  goToSocialLink(link: string): void {
    window.open(link);
  }
}
</script>
<style lang="scss">
#nav-bar-footer {
  .disclaimer-text {
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: #616161;
    margin: 0;
  }
}
</style>
