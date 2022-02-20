<template>
  <footer class="grey darken-4 white--text py-4" id="footer">
    <div class="footer-content max-width">
      <div class="contact-links" v-if="windowWidth < 768">
        <span
          class="d-flex justify-center align-center mobile-icon"
          style="cursor: default"
        >
          <v-icon color="white" class="mr-2" small aria-label="mobile phone"
            >fa-phone</v-icon
          >
          07414 095408
        </span>
        <v-hover>
          <span
            slot-scope="{ hover }"
            style="cursor: pointer"
            class="d-flex justify-center align-center"
            :class="hover ? 'primary-lighter--text' : ''"
            @click="sendEmail"
          >
            <v-icon
              class="mr-2"
              :color="hover ? 'primary-lighter' : 'white'"
              small
              aria-label="email"
              >fa-envelope</v-icon
            >contact@buildadream.co.uk
          </span>
        </v-hover>
      </div>
      <div :class="windowWidth < 768 ? 'text-center' : ''">
        <p class="my-0">&copy; 2021 Build A-Dream. All Rights Reserved.</p>
        <p class="my-0">
          Site created by
          <a
            class="link white--text"
            href="https://alex-long.co.uk/"
            target="_blank"
            rel="noreferrer"
            >Alex</a
          >
        </p>
      </div>
      <div class="contact-links" v-if="windowWidth >= 768">
        <span class="d-flex align-center mobile-icon" style="cursor: default">
          <v-icon color="white" class="mr-2" aria-label="mobile phone" small
            >fa-phone</v-icon
          >
          07414 095408
        </span>
        <v-hover>
          <span
            slot-scope="{ hover }"
            style="cursor: pointer"
            class="d-flex align-center"
            :class="hover ? 'primary-lighter--text' : ''"
            @click="sendEmail"
          >
            <v-icon
              class="mr-2"
              :color="hover ? 'primary-lighter' : 'white'"
              small
              aria-label="email"
              >fa-envelope</v-icon
            >contact@buildadream.co.uk
          </span>
        </v-hover>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  props: {
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const sendEmail = (): void => {
      window.location.href = "mailto:contact@builda-dream.com";
    };

    return {
      sendEmail,
    };
  },
});
</script>

<style lang="scss" scoped>
#footer {
  box-shadow: 4px -5px 6px 0px #00000015;
  border-top: 1px solid #e5e5e5;

  .footer-content {
    width: 90%;
  }

  .contact-links {
    text-align: center;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    .footer-content {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
