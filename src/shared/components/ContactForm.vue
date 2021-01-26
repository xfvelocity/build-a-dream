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
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import SnackBar from "@/shared/components/SnackBar.vue";
import { required, integer, email, min } from "vee-validate/dist/rules";
import axios from "axios";

extend("min", {
  ...min,
  message: "Invalid number",
});
extend("email", {
  ...email,
  message: "Invalid email",
});
extend("integer", {
  ...integer,
  message: "Invalid number",
});
extend("required", {
  ...required,
  message: "This field is required",
});

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
      phoneNumber: this.phoneNumber,
      emailAddress: this.emailAddress,
      message: this.message,
    };
    axios
      .post("https://usebasin.com/f/5d041ec64531", message)
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
