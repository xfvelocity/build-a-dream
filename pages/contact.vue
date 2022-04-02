<template>
  <div>
    <Header title="Contact Us" height="40vh" />

    <div id="contact-page">
      <ContactInfo />
      <ContactForm class="mt-8" id="contact-page-form" />
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/shared/components/Header.vue";
import ContactForm from "@/components/shared/components/contact-form/ContactForm.vue";
import ContactInfo from "@/components/contact/ContactInfo.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Header,
    ContactForm,
    ContactInfo,
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
});
</script>

<style lang="scss" scoped>
#contact-page {
  padding-top: 20px;
  padding-bottom: 60px;

  #contact-page-form {
    width: 85%;
    margin: 30px auto 60px auto;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 40px 0;

    #contact-info {
      width: 25%;
      max-width: 250px;
      margin: 40px 0 20px 0;
    }

    #contact-page-form {
      width: 50%;
      margin: 20px 0 40px 80px;
    }
  }
}
</style>
