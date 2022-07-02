<template>
  <div class="contact">
    <Header title="Contact Us" height="40vh" />

    <div class="contact-page">
      <div class="contact-info">
        <SectionTitle title="Contact Info" class="section-title" :width="145" />

        <div class="contact-links">
          <span class="d-flex align-center mb-4 cursor-default">
            <v-icon class="mr-3" small aria-label="mobile phone">
              mdi-phone
            </v-icon>
            07414 095408
          </span>

          <span
            class="d-flex align-center mb-4 text-primary-lighter cursor-pointer"
            @click="sendEmail"
          >
            <v-icon
              class="mr-3"
              color="primary-lighter"
              small
              aria-label="email"
            >
              mdi-email
            </v-icon>
            contact@buildadream.co.uk
          </span>

          <span class="d-flex align-center mobile-icon cursor-default">
            <v-icon class="mr-3" small aria-label="location">
              mdi-map-marker
            </v-icon>
            Lincolnshire
          </span>
        </div>
      </div>
      <ContactForm class="contact-form mt-8" />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/basic/header/Header.vue";
import ContactForm from "@/components/basic/contact-form/ContactForm.vue";
import SectionTitle from "~~/components/basic/title/SectionTitle.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Header,
    ContactForm,
    SectionTitle,
  },
  head: {
    title: "Contact Us | Build A-Dream | Lincoln Landscape Gardeners",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Contact us now to get a professional free quotation from landscapers with over 25 years experience to help transform your garden",
      },
    ],
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
.contact {
  &-page {
    padding-top: 20px;
    padding-bottom: 60px;
  }

  &-form {
    width: 85%;
    margin: 30px auto 60px auto;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    &-page {
      display: flex;
      justify-content: center;
      margin: 40px 0;
    }

    &-info {
      width: 25%;
      max-width: 250px;
      margin: 40px 0 20px 0;
    }

    &-form {
      width: 50%;
      margin: 20px 0 40px 80px;
    }
  }
}
</style>
