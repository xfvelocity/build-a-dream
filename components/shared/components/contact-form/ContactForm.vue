<template>
  <Form
    id="contact-form"
    v-slot="{ validate, handleReset }"
    :validation-schema="validationSchema"
  >
    <Field v-model="contactInfo.name" name="name" v-slot="{ field, errors }">
      <v-text-field
        v-bind="field"
        label="Name"
        placeholder="John Smith"
        outline
        :error-messages="errors"
      />
    </Field>

    <Field
      v-model="contactInfo.phoneNumber"
      name="number"
      v-slot="{ field, errors }"
    >
      <v-text-field
        v-bind="field"
        label="Phone Number"
        @keydown.space.prevent
        placeholder="07414095408"
        :error-messages="errors"
      />
    </Field>

    <Field
      v-model="contactInfo.message"
      name="message"
      v-slot="{ field, errors }"
    >
      <v-textarea
        v-bind="field"
        label="Message"
        placeholder="How can we help.."
        :error-messages="errors"
      />
    </Field>

    <v-btn
      class="mt-2"
      style="width: 100%"
      color="primary"
      :loading="loading"
      @click="submitMessage(validate, handleReset)"
    >
      Submit
    </v-btn>

    <v-snackbar
      v-if="snackbar.value"
      content-class="text-center text-white fw-600"
      v-model="snackbar.value"
      :color="snackbar.color"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </Form>
</template>

<script lang="ts">
import { validationSchema } from "@/utility/validation";
import { Form, Field, ValidationResult } from "vee-validate";
import { ContactInfo, Snackbar } from "./types/contactForm.data";
import axios from "axios";

export default defineComponent({
  name: "ContactForm",
  components: {
    Form,
    Field,
  },
  setup() {
    const loading = ref<boolean>(false);
    const snackbar = ref<Snackbar>({
      message: "",
      value: false,
      color: "",
    });
    const contactInfo = ref<ContactInfo>({
      name: "",
      phoneNumber: "",
      message: "",
    });

    const submitMessage = async (
      validateFn: Function,
      handleReset: Function
    ): Promise<void> => {
      const valid: ValidationResult = await validateFn();

      if (valid.valid) {
        loading.value = true;

        axios
          .post("https://usebasin.com/f/5d041ec64531", contactInfo.value)
          .then(() => {
            snackbar.value = {
              message: "Your email has been sent, we will be in touch shortly",
              value: true,
              color: "primary",
            };
            contactInfo.value = {
              name: "",
              phoneNumber: "",
              message: "",
            };

            handleReset();
          })
          .catch(() => {
            snackbar.value = {
              message: "An error occured, please try again",
              value: true,
              color: "red",
            };
          })
          .finally(() => {
            loading.value = false;
          });
      }
    };

    return {
      loading,
      snackbar,
      validationSchema,
      contactInfo,
      submitMessage,
    };
  },
});
</script>
