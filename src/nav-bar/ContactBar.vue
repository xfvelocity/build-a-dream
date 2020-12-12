<template>
  <v-card :height="30" tile id="contact-bar">
    <v-app-bar :height="30" color="grey darken-4">
      <v-spacer></v-spacer>
      <div class="d-flex">
        <span class="white--text d-flex align-center mr-4"
          ><v-icon class="mr-2" color="white" small>fas fa-phone-alt</v-icon
          >07414 095408</span
        >
        <span class="white--text d-flex align-center contact-link" @click="sendEmail"
          ><v-icon class="mr-2" color="white" small>fas fa-envelope</v-icon
          >contact@builda-dream.com</span
        >
        <v-hover>
          <v-icon
            slot-scope="{ hover }"
            :color="hover ? 'green' : 'white'"
            class="ml-2"
            @click="goToSocialLink"
            small
            >fab fa-facebook-square</v-icon
          >
        </v-hover>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContactBar extends Vue {
  sendEmail(): void {
    window.location.href = "mailto:contact@builda-dream.com";
  }

  goToSocialLink(): void {
    window.open("https://www.facebook.com");
  }
}
</script>
<style lang="scss">
#contact-bar {
  .contact-link {
    cursor: pointer;
  }
  .v-toolbar__content {
    width: 90%;
  }
}
</style>
