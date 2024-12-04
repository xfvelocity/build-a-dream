<template>
  <bd-header title="Contact Us" height="40vh" />

  <div class="contact-page">
    <div class="contact-info">
      <bd-section-title
        title="Contact Info"
        class="section-title"
        :width="160"
      />

      <div class="contact-links">
        <a
          class="d-flex align-center text-black link mb-4"
          :href="`tel:${config.public.PHONE as string}`"
        >
          <v-icon class="mr-2" aria-label="mobile phone" small>
            mdi-phone
          </v-icon>
          {{ config.public.PHONE }}
        </a>

        <a
          class="d-flex align-center text-black link mb-4"
          :href="`mailto:${config.public.EMAIL as string}`"
        >
          <v-icon class="mr-2" small aria-label="email"> mdi-email </v-icon>
          {{ config.public.EMAIL }}
        </a>

        <span class="d-flex align-center mobile-icon cursor-default">
          <v-icon class="mr-3" small aria-label="location">
            mdi-map-marker
          </v-icon>
          Lincolnshire
        </span>
      </div>
    </div>

    <bd-contact-form class="contact-form mt-8" />
  </div>
</template>

<script lang="ts" setup>
// ** Head **
useHead({
  title: "Contact Us | Build A-Dream | Lincoln Landscape Gardeners",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Contact us now to get a professional free quotation from landscapers with over 25 years experience to help transform your garden",
    },
  ],
});

// ** Data **
const config = useRuntimeConfig();

// ** Methods **
const sendEmail = (): void => {
  window.location.href = `mailto:${config.public.EMAIL}`;
};
</script>

<style lang="scss" scoped>
.contact {
  &-page {
    padding-top: 20px;
    padding-bottom: 60px;
  }

  &-links {
    a {
      text-decoration: none !important;
    }
  }

  &-info {
    width: 85%;
    max-width: 500px;
    margin: 0 auto;
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
