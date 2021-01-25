<template>
  <div class="white py-6" id="footer">
    <div class="footer-content max-width">
      <div class="contact-links" v-if="windowWidth < 768">
        <span
          class="d-flex justify-center align-center mobile-icon"
          style="cursor: default"
        >
          <v-icon class="mr-2" small>fas fa-phone-alt</v-icon>
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
            <v-icon class="mr-2" :color="hover ? 'primary-lighter' : ''" small
              >fas fa-envelope</v-icon
            >contact@buildadream.co.uk
          </span>
        </v-hover>
      </div>
      <div :class="windowWidth < 768 ? 'text-center' : ''">
        <p class="my-0">&copy; 2021 Build A-Dream. All Rights Reserved.</p>
        <p class="my-0">
          Site created by <a style="text-decoration: none;" href="">Alex</a>
        </p>
      </div>
      <div class="contact-links" v-if="windowWidth >= 768">
        <span class="d-flex align-center mobile-icon" style="cursor: default">
          <v-icon class="mr-2" small>fas fa-phone-alt</v-icon>
          07414 095408
        </span>
        <v-hover>
          <span
            slot-scope="{ hover }"
            style="cursor: pointer"
            class="d-flex  align-center"
            :class="hover ? 'primary-lighter--text' : ''"
            @click="sendEmail"
          >
            <v-icon class="mr-2" :color="hover ? 'primary-lighter' : ''" small
              >fas fa-envelope</v-icon
            >contact@buildadream.co.uk
          </span>
        </v-hover>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop()
  windowWidth!: number;

  sendEmail(): void {
    window.location.href = "mailto:contact@builda-dream.com";
  }
}
</script>
<style lang="scss">
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
