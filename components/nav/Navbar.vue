<template>
  <xf-nav>
    <nuxt-link class="xf-h-max-content" to="/">
      <img src="~/assets/images/logo.png" />
    </nuxt-link>

    <template #drawer>
      <div class="xf-flex-center">
        <ul class="xf-mt-6">
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

      <div class="xf-flex-center xf-flex-direction-col xf-my-6">
        <a
          class="xf-colour-primary xf-flex xf-flex-align-center"
          href="https://www.facebook.com/buildadreamlandscapers"
          target="_blank"
        >
          <xf-icon
            :src="getDynamicAsset('icons/facebook.svg')"
            color="primary"
            aria-label="facebook"
          />
          <span class="xf-ml-2 xf-text-14">Find us on facebook</span>
        </a>

        <p class="xf-text-12">
          &copy; {{ currentYear }} Build A-Dream Landscape Gardeners
        </p>
      </div>
    </template>
  </xf-nav>
</template>

<script lang="ts" setup>
import { XfNav, XfIcon } from "xf-cmpt-lib";
import { Route } from "~~/utils/types/app.types";
import { getDynamicAsset } from "~/composables/generic";

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

const currentYear: number = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.xf-nav {
  img {
    max-width: 200px;
  }
}
</style>
