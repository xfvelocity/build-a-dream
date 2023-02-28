<template>
  <xf-nav>
    <nuxt-link class="xf-h-max-content" to="/">
      <img src="~/assets/images/logo.png" />
    </nuxt-link>

    <template #drawer>
      <div class="xf-flex-center">
        <ul class="xf-mt-10">
          <li
            v-for="(route, i) in routes"
            :key="i"
            class="xf-py-2 xf-text-20 xf-text-center"
          >
            <nuxt-link :to="route.route">
              {{ route.text }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </template>
  </xf-nav>
</template>

<script lang="ts" setup>
import { XfNav } from "xf-cmpt-lib";
import { Route } from "~~/utils/types/app.types";

const routes: Route[] = [
  {
    text: "Home",
    route: "/home",
  },
  {
    text: "Our work",
    route: "/our-work",
  },
  {
    text: "Contact us",
    route: "/contact",
  },
];
</script>

<style lang="scss" scoped>
.xf-nav {
  img {
    max-width: 200px;
  }
}
</style>
