<template>
  <div class="contact">
    <SectionTitle
      title="Contact Us"
      desc="Looking for a free quote or simply got a question to ask? Get in touch."
      :width="130"
    />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import SectionTitle from "@/components/basic/title/SectionTitle.vue";
import ContactForm from "@/components/basic/contact-form/ContactForm.vue";

export default defineComponent({
  name: "Contact",
  components: {
    SectionTitle,
    ContactForm,
  },
});
</script>

<style lang="scss" scoped>
.contact {
  width: 90%;
  padding-top: 40px;
  padding-bottom: 160px;
  max-width: 500px;
  margin: 0 auto;
}
</style>
