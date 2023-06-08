<template>
  <form @submit="submitMessage">
    <v-text-field
      v-model="contactInfo.name"
      label="Name"
      name="name"
      type="name"
      placeholder="John Smith"
      outline
      required
    />

    <v-text-field
      v-model="contactInfo.phoneNumber"
      label="Phone Number"
      name="number"
      type="tel"
      @keydown.space.prevent
      placeholder="07414095408"
      required
    />

    <v-textarea
      v-model="contactInfo.message"
      name="message"
      label="Message"
      type="text"
      placeholder="How can we help.."
      required
    />

    <v-btn class="w-100" color="primary" type="submit"> Submit </v-btn>

    <p v-if="messageSent" class="text-center mt-4 text-primary">
      Thank you for your submission!
    </p>
  </form>
</template>

<script lang="ts">
import { validationSchema } from "@/utility/validation";
import { ContactInfo } from "./types/bdContactForm.types";

import axios from "axios";

export default defineComponent({
  name: "BdContactForm",
  setup() {
    // Variables
    const messageSent = ref<boolean>(false);
    const contactInfo = ref<ContactInfo>({
      name: "",
      phoneNumber: "",
      message: "",
    });

    // Methods
    const submitMessage = async (event: Event): Promise<void> => {
      event.preventDefault();

      messageSent.value = true;

      axios
        .post("https://usebasin.com/f/5d041ec64531", contactInfo.value)
        .then(() => {
          contactInfo.value = {
            name: "",
            phoneNumber: "",
            message: "",
          };

          setTimeout(() => {
            messageSent.value = false;
          }, 3000);
        });
    };

    return {
      validationSchema,
      contactInfo,
      messageSent,
      submitMessage,
    };
  },
});
</script>
