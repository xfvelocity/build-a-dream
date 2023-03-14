<template>
  <footer class="bd-footer xf-pt-8">
    <div class="bd-navigation-max-width">
      <div class="xf-flex-center">
        <div class="xf-text-14">
          <h4 class="xf-mb-2">Contact</h4>

          <a class="bd-footer-link" :href="`mailto:${content.email}`">
            <XfIcon
              class="xf-mr-2"
              :src="getDynamicAsset('icons/mail.svg')"
              :size="14"
            />
            {{ content.email }}
          </a>

          <div>
            <XfIcon
              class="xf-mr-1"
              :src="getDynamicAsset('icons/phone.svg')"
              :size="14"
            />
            {{ content.phone }}
          </div>

          <div>
            <XfIcon
              class="xf-mr-1"
              :src="getDynamicAsset('icons/location.svg')"
              :size="14"
            />
            {{ content.location }}
          </div>
        </div>

        <div class="xf-ml-10">
          <h4 class="xf-mb-2">Pages</h4>

          <ul>
            <li
              v-for="(route, i) in content.routes"
              :key="i"
              class="xf-text-14"
            >
              <nuxt-link :to="route.route">
                {{ route.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <p class="xf-text-center xf-text-12 xf-mt-8 xf-pb-4">
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

  &-link {
    display: flex;
    align-items: center;
  }

  &-border-right {
    border-right: 1px solid grey;
  }
}
</style>
