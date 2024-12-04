<template>
  <v-card :height="35" tile class="bd-contact-bar">
    <v-app-bar class="yd-w-100" :height="35" color="grey-darken-4">
      <div class="d-flex align-center max-width w-100 pr-7">
        <v-spacer />

        <div class="d-flex">
          <a
            class="d-flex align-center text-white link"
            :href="`tel:${config.public.PHONE as string}`"
          >
            <v-icon class="mr-2" aria-label="mobile phone" small>
              mdi-phone
            </v-icon>
            {{ config.public.PHONE }}
          </a>

          <a
            class="mx-4 d-flex align-center text-white link"
            :href="`mailto:${config.public.EMAIL as string}`"
          >
            <v-icon class="mr-2" small aria-label="email"> mdi-email </v-icon>
            {{ config.public.EMAIL }}
          </a>

          <a
            class="link"
            :href="config.public.FACEBOOK_URL as string"
            target="_blank"
          >
            <v-icon color="white" aria-label="facebook"> mdi-facebook </v-icon>
          </a>
        </div>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts" setup>
// ** Data **
const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.bd-contact-bar {
  z-index: 99;

  a {
    text-decoration: none;
  }
}
</style>
