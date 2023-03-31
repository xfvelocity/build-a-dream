<template>
  <xf-nav>
    <nuxt-link class="xf-h-max-content" to="/">
      <img src="~/assets/images/logo.png" />
    </nuxt-link>

    <template #drawer>
      <div class="xf-flex xf-flex-direction-col xf-h-100">
        <div class="xf-flex-center">
          <ul class="xf-mt-4">
            <li
              v-for="(route, i) in content.routes"
              :key="i"
              class="xf-py-2 xf-text-20 xf-text-center"
            >
              <nuxt-link
                :to="route.route"
                active-class="xf-text-colour-green-darken-4"
              >
                {{ route.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="xf-flex-1" />

        <div class="xf-flex-col-center xf-pb-6">
          <a
            class="xf-flex xf-flex-direction-col xf-flex-align-items-center"
            :href="content.facebook"
            target="_blank"
          >
            <xf-icon
              :src="getDynamicAsset('icons/facebook.svg')"
              fill="green-darken-4"
              :size="20"
              aria-label="facebook"
            />
            <div
              class="xf-ml-2 xf-mt-1 xf-text-14 xf-text-colour-green-darken-4"
            >
              Find us on facebook
            </div>
          </a>
        </div>
      </div>
    </template>
  </xf-nav>
</template>

<script lang="ts" setup>
import { XfNav, XfIcon } from "xf-cmpt-lib";
import { getDynamicAsset } from "~/composables/generic";
import content from "~/content/navigation.json";
</script>

<style lang="scss" scoped>
.xf-nav {
  img {
    max-width: 200px;
  }
}
</style>
