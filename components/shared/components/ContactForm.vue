<template>
  <div id="contact-form">
    <ValidationObserver v-slot="{ invalid, validate }">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <v-text-field
          label="Name"
          placeholder="John Smith"
          v-model="name"
          :error-messages="errors"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider rules="required|integer|min:11" v-slot="{ errors }">
        <v-text-field
          label="Phone Number"
          @keydown.space.prevent
          v-model="phoneNumber"
          placeholder="07414095408"
          :error-messages="errors"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider rules="required|email" v-slot="{ errors }">
        <v-text-field
          label="Email Address"
          v-model="emailAddress"
          placeholder="johnsmith@gmail.com"
          :error-messages="errors"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider rules="required" v-slot="{ errors }">
        <v-textarea
          label="Message"
          v-model="message"
          placeholder="How can we help.."
          :error-messages="errors"
        ></v-textarea>
      </ValidationProvider>
      <v-btn
        class="mt-2"
        style="width: 100%"
        color="primary"
        @click="submitMessage(validate, invalid)"
        >Submit</v-btn
      >
      <p class="text-center mt-2">{{ emailSendMsg }}</p>
      <!-- <SnackBar
        :isSnackBarOpen="isSnackBarOpen"
        :snackBarMode="snackBarMode"
      ></SnackBar> -->
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import SnackBar from "./SnackBar.vue";
import axios from "axios";

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    SnackBar,
  },
})
export default class ContactForm extends Vue {
  name: string = "";
  phoneNumber: string = "";
  emailAddress: string = "";
  message: string = "";
  emailSendMsg: string = "";

  submitMessage(validate: Function, invalid: boolean): void {
    validate();
    if (invalid) {
      this.emailSendMsg = "Please fill in the required fields.";
      return;
    }
    const message = {
      name: this.name,
      email: this.emailAddress,
      phoneNumber: this.phoneNumber,
      message: this.message,
      subject: `${this.name} - Build A-Dream Enquiry`,
      from: "smtpalexlongtest@gmail.com",
      to: "alexlong2001@outlook.com",
      html: `<b>Name:</b> ${this.name}<br/><b>Phone Number:</b> ${this.phoneNumber}<br/><b>Email:</b> ${this.emailAddress}<br/><br/>${this.message}`,
    };
    axios
      .post("http://localhost:5000/api/email", message)
      .then((res) => {
        console.log(res);
        this.emailSendMsg = "Email sent.";
      })
      .catch(() => {
        this.emailSendMsg = "An error occured sending email.";
      });
  }
}
</script>
