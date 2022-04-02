<template>
  <div id="contact-info">
    <SectionTitle title="Contact Info" class="section-title" :width="145" />

    <div class="contact-links">
      <span class="d-flex align-center mb-4 cursor-default">
        <v-icon class="mr-3" small aria-label="mobile phone">mdi-phone</v-icon>
        07414 095408
      </span>

      <span
        class="d-flex align-center mb-4 text-primary-lighter cursor-pointer"
        @click="sendEmail"
      >
        <v-icon class="mr-3" color="primary-lighter" small aria-label="email">
          mdi-email
        </v-icon>
        contact@buildadream.co.uk
      </span>

      <span class="d-flex align-center mobile-icon cursor-default">
        <v-icon class="mr-3" small aria-label="location">mdi-map-marker</v-icon>
        Lincolnshire
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import SectionTitle from "@/components/shared/components/SectionTitle.vue";

export default defineComponent({
  name: "ContactInfo",
  components: {
    SectionTitle,
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
#contact-info {
  width: 85%;
  margin: 40px auto 60px auto;
  max-width: 500px;

  .section-title {
    margin-bottom: 20px !important;

    h2 {
      margin: 0;
      margin-bottom: 15px;
    }
  }
}
</style>
