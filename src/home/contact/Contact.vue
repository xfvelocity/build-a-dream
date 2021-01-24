<template>
  <div id="contact">
    <div class="contact-title text-center mb-10">
      <h2>Contact Us</h2>
      <p class="my-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        consectetur aperiam nobis quis.
      </p>
    </div>
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
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
  padding-bottom: 60px;
  max-width: 500px;
  margin: 0 auto;
  .contact-title {
    h2 {
      border-bottom: 1px solid #086500;
      width: 130px;
      margin: 10px auto;
    }
    p {
      width: 80%;
      margin: 0 auto;
      max-width: 400px;
    }
  }
}
</style>
