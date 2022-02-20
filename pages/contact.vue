<template>
  <div>
    <Header title="Contact" height="30vh" />
    <div id="contact-page">
      <ContactInfo :windowWidth="windowWidth" />
      <ContactForm class="mt-8" id="contact-page-form" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Header from "@/components/shared/components/Header.vue";
import ContactForm from "@/components/shared/components/ContactForm.vue";
import ContactInfo from "@/components/contact/ContactInfo.vue";

export default defineComponent({
  name: "Contact",
  props: {
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
  setup() {
    const windowWidth = ref<number>(0);

    onMounted(() => {
      if (!process.browser) return;

      windowWidth.value = window.innerWidth;

      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    });

    return {
      windowWidth,
    };
  },
});
</script>

<style lang="scss" scoped>
#contact-page {
  #contact-page-form {
    width: 90%;
    margin: 20px auto 60px auto;
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
