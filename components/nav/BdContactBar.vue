<template>
  <v-card :height="35" tile class="contact-bar">
    <v-app-bar class="yd-w-100" :height="35" color="grey-darken-4">
      <div class="d-flex align-center max-width w-100 pr-7">
        <v-spacer />
        <div class="d-flex">
          <span class="text-white d-flex align-center mr-4 cursor-default">
            <v-icon class="mr-2" color="white" aria-label="mobile phone" small>
              mdi-phone
            </v-icon>
            07414 095408
          </span>

          <span
            class="d-flex align-center text-white cursor-pointer link"
            @click="sendEmail"
          >
            <v-icon class="mr-2" small aria-label="email"> mdi-email </v-icon>
            contact@buildadream.co.uk
          </span>
        </div>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  name: "BdContactBar",
  setup() {
    // Methods
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
.contact-bar {
  z-index: 999;
}
</style>
