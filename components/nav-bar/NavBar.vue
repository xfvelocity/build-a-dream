<template>
  <nav class="navbar">
    <v-app-bar :height="70" app>
      <div class="d-flex align-center max-width w-100">
        <img
          class="cursor-pointer"
          src="/img/build-a-dream-logo.png"
          alt="Build A-Dream Logo"
          @click="$router.push('/')"
        />

        <v-spacer />

        <div
          v-if="isMobile"
          class="navbar-mobile-btn"
          :class="isNavDrawerOpen ? 'navbar-mobile-btn__open' : ''"
          @click="isNavDrawerOpen = !isNavDrawerOpen"
        >
          <span v-for="i in 4" :key="i" />
        </div>

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
      </div>
    </v-app-bar>

    <mobile-nav-bar v-if="isMobile" v-model="isNavDrawerOpen" />
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
    const navLinks: NavLinks[] = navLinksData;
    const isNavDrawerOpen = ref<boolean>(false);

    return {
      isMobile,
      navLinks,
      isNavDrawerOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;

  img {
    width: 220px;
  }

  &-mobile-btn {
    width: 25px;
    height: 15px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    span {
      position: absolute;
      height: 3px;
      width: 100%;
      background: #363636;
      border-radius: 10px;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 7px;
      }

      &:nth-child(4) {
        top: 14px;
      }
    }

    &__open span {
      &:nth-child(1),
      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
