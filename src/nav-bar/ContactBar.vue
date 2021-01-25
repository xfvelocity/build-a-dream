<template>
  <v-card :height="30" tile id="contact-bar">
    <v-app-bar :height="30" color="grey darken-4">
      <v-spacer></v-spacer>
      <div class="d-flex">
        <span
          class="white--text d-flex align-center mr-4"
          style="cursor: default"
          ><v-icon class="mr-2" color="white" small>fas fa-phone-alt</v-icon
          >07414 095408</span
        >
        <v-hover>
          <span
            slot-scope="{ hover }"
            style="cursor: pointer"
            class="d-flex align-center"
            :class="hover ? 'primary-lighter--text' : 'white--text'"
            @click="sendEmail"
            ><v-icon
              class="mr-2"
              :color="hover ? 'primary-lighter' : 'white'"
              small
              >fas fa-envelope</v-icon
            >contact@buildadream.co.uk</span
          >
        </v-hover>
        <v-hover>
          <v-icon
            slot-scope="{ hover }"
            :color="hover ? 'primary-lighter' : 'white'"
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
    window.location.href = "mailto:contact@buildadream.co.uk";
  }

  goToSocialLink(): void {
    window.open("https://www.facebook.com");
  }
}
</script>
<style lang="scss">
.v-toolbar__content {
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4px 0;
}
</style>
