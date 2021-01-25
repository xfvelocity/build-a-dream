<template>
  <div>
    <v-text-field label="Name" v-model="name" hide-details></v-text-field>
    <v-text-field
      label="Phone Number"
      v-model="phoneNumber"
      hide-details
    ></v-text-field>
    <v-text-field
      label="Email Address"
      v-model="emailAddress"
      hide-details
    ></v-text-field>
    <v-textarea label="Message" v-model="message" hide-details></v-textarea>
    <v-btn style="width: 100%" color="primary" @click="submitMessage"
      >Submit</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ContactForm extends Vue {
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
