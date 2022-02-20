<template>
  <div id="contact-form">
    <v-text-field
      label="Name"
      placeholder="John Smith"
      v-model="contactInfo.name"
    />

    <v-text-field
      label="Phone Number"
      @keydown.space.prevent
      v-model="contactInfo.phoneNumber"
      placeholder="07414095408"
    />

    <v-text-field
      label="Email Address"
      v-model="contactInfo.emailAddress"
      placeholder="johnsmith@gmail.com"
    />

    <v-textarea
      label="Message"
      v-model="contactInfo.message"
      placeholder="How can we help.."
    />
    <v-btn
      class="mt-2"
      style="width: 100%"
      color="primary"
      @click="submitMessage"
    >
      Submit
    </v-btn>
    <p class="text-center mt-2">{{ emailSendMsg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import axios from "axios";

export default defineComponent({
  name: "ContactForm",
  setup() {
    const emailSendMsg = ref<string>("");
    const contactInfo = {
      name: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    };

    const submitMessage = (): void => {
      // validate();
      // if (invalid) {
      //   emailSendMsg.value = "Please fill in the required fields.";
      //   return;
      // }
      // axios
      //   .post("https://usebasin.com/f/5d041ec64531", contactInfo)
      //   .then(() => {
      //     emailSendMsg.value = "Email sent.";
      //   })
      //   .catch(() => {
      //     emailSendMsg.value = "An error occured sending email.";
      //   });
    };

    return {
      emailSendMsg,
      contactInfo,
      submitMessage,
    };
  },
});
</script>
