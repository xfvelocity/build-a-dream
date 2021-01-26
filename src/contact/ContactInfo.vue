<template>
  <div id="contact-info">
    <SectionTitle
      title="Contact Info"
      class="section-title"
      :width="135"
    ></SectionTitle>
    <div class="contact-links">
      <span class="d-flex align-center mb-2" style="cursor: default">
        <v-icon class="mr-2" small aria-label="mobile phone">fas fa-phone-alt</v-icon>
        07414 095408
      </span>
      <v-hover>
        <span
          slot-scope="{ hover }"
          style="cursor: pointer"
          class="d-flex align-center mb-2"
          :class="hover ? 'primary-lighter--text' : ''"
          @click="sendEmail"
        >
          <v-icon class="mr-2" :color="hover ? 'primary-lighter' : ''" small aria-label="email"
            >fas fa-envelope</v-icon
          >contact@buildadream.co.uk
        </span>
      </v-hover>
      <span class="d-flex align-center mobile-icon" style="cursor: default">
        <v-icon class="mr-2" small aria-label="location">fas fa-map-marker-alt</v-icon>
        Lincolnshire
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionTitle from "@/shared/components/SectionTitle.vue";

@Component({
  components: {
    SectionTitle,
  },
})
export default class ContactInfo extends Vue {
  @Prop()
  windowWidth!: number;

  sendEmail(): void {
    window.location.href = "mailto:contact@builda-dream.com";
  }
}
</script>
<style lang="scss">
#contact-info {
  width: 90%;
  margin: 40px auto 20px auto;
  max-width: 500px;
  .section-title {
    margin: 0 !important;
    h2 {
      margin: 0;
      margin-bottom: 15px;
    }
  }
}
</style>
