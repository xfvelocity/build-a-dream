<template>
  <v-card :height="35" tile id="contact-bar">
    <v-app-bar :height="35" color="grey-darken-4">
      <div class="d-flex align-center max-width w-100 px-3">
        <v-spacer />
        <div class="d-flex">
          <span
            class="text-white d-flex align-center mr-4"
            style="cursor: default"
          >
            <v-icon class="mr-2" color="white" aria-label="mobile phone" small>
              mdi-phone
            </v-icon>
            07414 095408
          </span>

          <span
            style="cursor: pointer"
            class="d-flex align-center text-white"
            @click="sendEmail"
          >
            <v-icon class="mr-2" color="white" small aria-label="email">
              mdi-email
            </v-icon>
            contact@buildadream.co.uk
          </span>

          <!-- <v-icon
            color="white"
            class="ml-4"
            @click="goToSocialLink"
            small
            aria-label="facebook"
          >
            mdi-facebook
          </v-icon> -->
        </div>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  name: "ContactBar",
  setup() {
    const sendEmail = (): void => {
      window.location.href = "mailto:contact@buildadream.co.uk";
    };

    const goToSocialLink = (): void => {
      window.open("https://www.facebook.com/BuildADreamLandscapers");
    };

    return {
      sendEmail,
      goToSocialLink,
    };
  },
});
</script>

<style lang="scss" scoped>
#contact-bar {
  z-index: 999;
}
</style>
