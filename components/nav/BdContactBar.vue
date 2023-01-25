<template>
  <!-- TODO: ADD FACEBOOK -->
  <v-card :height="35" tile class="bd-contact-bar">
    <v-app-bar class="yd-w-100" :height="35" color="grey-darken-4">
      <div class="d-flex align-center max-width w-100 pr-7">
        <v-spacer />

        <div class="d-flex">
          <span class="text-white d-flex align-center cursor-default">
            <v-icon class="mr-2" color="white" aria-label="mobile phone" small>
              mdi-phone
            </v-icon>
            07414 095408
          </span>

          <a
            class="mx-4 d-flex align-center text-white cursor-pointer link"
            href="mailto:contact@buildadream.co.uk"
          >
            <v-icon class="mr-2" small aria-label="email"> mdi-email </v-icon>
            contact@buildadream.co.uk
          </a>

          <a
            href="https://www.facebook.com/buildadreamlandscapers"
            target="_blank"
          >
            <v-icon color="white" aria-label="facebook"> mdi-facebook </v-icon>
          </a>
        </div>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  name: "BdContactBar",
});
</script>

<style lang="scss" scoped>
.bd-contact-bar {
  z-index: 99;

  a {
    text-decoration: none;
  }
}
</style>
