<template>
  <div>
    <Header title="Contact" height="30vh"></Header>
    <div id="contact-page">
      <ContactInfo :windowWidth="windowWidth"></ContactInfo>
      <ContactForm class="mt-8" id="contact-page-form"></ContactForm>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/shared/components/Header.vue";
import ContactForm from "@/components/shared/components/ContactForm.vue";
import ContactInfo from "@/components/contact/ContactInfo.vue";

@Component({
  components: {
    Header,
    ContactForm,
    ContactInfo,
  },
})
export default class Contact extends Vue {
  windowWidth: number = 0;

  mounted(): void {
    if (!process.browser) return;
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
}
</script>
<style lang="scss">
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
