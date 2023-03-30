<template>
  <footer class="bd-footer xf-py-6">
    <div class="bd-navigation-max-width">
      <ul class="xf-flex-center">
        <li
          v-for="(route, i) in content.routes"
          :key="i"
          class="xf-text-12 xf-px-2"
          :class="{
            'bd-footer-border-right': i !== 2,
          }"
        >
          <nuxt-link :to="route.route">
            {{ route.text }}
          </nuxt-link>
        </li>
      </ul>

      <p class="xf-text-center xf-text-12 xf-mt-2">
        &copy; {{ currentYear }} Build A-Dream Landscape Gardeners
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";
import content from "~/content/navigation.json";

// ** Data **
const currentYear: number = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.bd-footer {
  background: white;
  border-top: 1px solid rgb(199, 199, 199);

  &-link {
    display: flex;
    align-items: center;
  }

  &-border-right {
    border-right: 1px solid grey;
  }
}
</style>
