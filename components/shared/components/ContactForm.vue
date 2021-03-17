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
      <ValidationProvider rules="required|integer" v-slot="{ errors }">
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
      <VueRecaptcha
        ref="recaptcha"
        :sitekey="recaptchaKey"
        :loadRecaptchaScript="true"
        @verify="submitMessage($event, validate, invalid)"
        @expired="onCaptchaExpired"
        size="invisible"
      >
        <v-btn
          :disabled="isLoading"
          class="mt-2"
          style="width: 100%"
          color="primary"
          >Submit</v-btn
        >
      </VueRecaptcha>
      <v-snackbar
        class="mb-4 pa-6"
        v-model="isSnackbarOpen"
        :color="snackbarColor"
      >
        {{ emailSendMsg }}
      </v-snackbar>
      <v-progress-linear
        v-if="isLoading"
        class="mt-2"
        indeterminate
        color="green"
      ></v-progress-linear>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VueRecaptcha from "vue-recaptcha";
import axios from "axios";

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    VueRecaptcha,
  },
})
export default class ContactForm extends Vue {
  $refs!: {
    recaptcha: VueRecaptcha;
  };
  name: string = "";
  phoneNumber: string = "";
  emailAddress: string = "";
  message: string = "";
  emailSendMsg: string = "";
  isSnackbarOpen: boolean = false;
  isLoading: boolean = false;
  snackbarColor: string = "";

  get recaptchaKey(): string | undefined {
    console.log(process.env.NODE_ENV);
    console.log(process.env.API_URL);
    console.log(process.env);
    return "6LeCCYAaAAAAAD3jrdHxKSLExCQAXhr9__ovWBNP";
  }

  onCaptchaExpired(): void {
    this.$refs.recaptcha.reset();
  }

  submitMessage(recaptcha: string, validate: Function, invalid: boolean): void {
    validate();
    if (invalid) {
      this.snackbarColor = "orange darken-4";
      this.isSnackbarOpen = true;
      this.emailSendMsg = "Please fill in the required fields.";
      return;
    }
    this.isLoading = true;
    this.$refs.recaptcha.execute();
    this.$refs.recaptcha.reset();
    const message = {
      name: this.name,
      email: this.emailAddress,
      phoneNumber: this.phoneNumber,
      message: this.message,
      subject: `${this.name} - Build A-Dream Enquiry`,
      recaptcha: recaptcha,
    };

    axios
      .post(`${process.env.API_URL}/api/builda-dream/email`, message)
      .then((res) => {
        this.snackbarColor = "light-green darken-4";
        this.emailSendMsg = "Message sent";
        this.isSnackbarOpen = true;
      })
      .catch(() => {
        this.snackbarColor = "red darken-3";
        this.emailSendMsg = "An error occured sending message";
        this.isSnackbarOpen = true;
      })
      .finally(() => (this.isLoading = false));
  }
}
</script>
<style lang="scss">
#contact-form {
  .v-snack__content {
    font-size: 16px !important;
    text-align: center;
    font-weight: 500;
  }
}
</style>
