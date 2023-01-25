<template>
  <v-app-bar class="pos-relative w-100 bd-nav" :height="70" app>
    <div class="d-flex align-center max-width w-100 px-4">
      <nuxt-link to="/">
        <img src="/img/build-a-dream-logo.png" alt="" />
      </nuxt-link>

      <v-spacer />

      <div
        v-if="isMobile"
        class="bd-nav-btn"
        :class="{ 'bd-nav-btn-open': isNavDrawerOpen }"
        @click="isNavDrawerOpen = !isNavDrawerOpen"
      >
        <span v-for="i in 4" :key="i" />
      </div>

      <ul v-else class="d-flex">
        <li v-for="(route, i) in routes" class="mr-6" :key="i">
          <nuxt-link class="internal-link" :to="route.href">
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </v-app-bar>

  <bd-nav-drawer v-if="isMobile" v-model="isNavDrawerOpen" />
</template>

<script lang="ts">
import { Route } from "./types/nav.types";
import { navRoutes } from "./data/nav";
import { isMobile } from "@/utility/width";

export default defineComponent({
  name: "BdNav",
  setup() {
    // Variables
    const route = useRoute();

    const routes = ref<Route[]>(navRoutes);
    const isNavDrawerOpen = ref<boolean>(false);

    // Methods
    // TODO: Refactor/Reuse this function
    const setActiveRoute = (path: string): void => {
      routes.value = JSON.parse(JSON.stringify([...navRoutes]));

      const matchingRoute: Route | undefined = routes.value.find(
        (link) => link.href === path
      );

      if (matchingRoute) {
        matchingRoute.active = true;
      }
    };

    // Watchers
    watch(route, () => setActiveRoute(route.path), { immediate: true });

    return {
      isMobile,
      routes,
      isNavDrawerOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.bd-nav {
  z-index: 99;

  li {
    list-style: none;

    a {
      text-decoration: none;
    }
  }

  img {
    width: 220px;
  }

  &-btn {
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

    &-open span {
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
