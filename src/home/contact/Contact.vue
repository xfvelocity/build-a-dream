<template>
  <div id="contact">
    <SectionTitle
      title="Contact Us"
      desc="Looking for a free quote or simply got a question to ask? Then get in touch."
      :width="130"
    ></SectionTitle>
    <ContactForm></ContactForm>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionTitle from "@/shared/components/SectionTitle.vue";
import ContactForm from "@/shared/components/ContactForm.vue";

@Component({
  components: {
    SectionTitle,
    ContactForm,
  },
})
export default class Contact extends Vue {
  name: string = "";
  phoneNumber: string = "";
  emailAddress: string = "";
  message: string = "";

  submitMessage(): void {
    const message = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      emailAddress: this.emailAddress,
      message: this.message,
    };
    console.log(message);
  }
}
</script>
<style lang="scss">
#contact {
  width: 90%;
  padding-bottom: 120px;
  max-width: 500px;
  margin: 0 auto;
}
</style>
