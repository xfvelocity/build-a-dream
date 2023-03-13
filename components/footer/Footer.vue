<template>
  <footer class="bd-footer xf-py-4 xf-flex">
    <div class="xf-flex">
      <a class="bd-footer-link" :href="`mailto:${content.email}`">
        <XfIcon
          class="xf-mr-1"
          :src="getDynamicAsset('icons/mail.svg')"
          :size="16"
        />
        {{ content.email }}
      </a>

      <a class="bd-footer-link xf-ml-2" href="">
        <XfIcon
          class="xf-mr-1"
          :src="getDynamicAsset('icons/phone.svg')"
          :size="14"
        />
        {{ content.phone }}
      </a>
    </div>

    <div class="xf-ml-auto">
      <ul class="xf-flex xf-gap-2">
        <li v-for="(route, i) in content.routes" :key="i">
          <nuxt-link :to="route.route">
            {{ route.text }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { XfIcon } from "xf-cmpt-lib";
import content from "~/content/navigation.json";
</script>

<style lang="scss" scoped>
.bd-footer {
  background: white;

  &-link {
    display: flex;
    align-items: center;
  }
}
</style>
