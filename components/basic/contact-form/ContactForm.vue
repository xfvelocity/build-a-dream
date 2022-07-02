<template>
  <Form
    id="contact-form"
    v-slot="{ validate }"
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
      v-model="contactInfo.emailAddress"
      name="email"
      v-slot="{ field, errors }"
    >
      <v-text-field
        v-bind="field"
        label="Email Address"
        placeholder="johnsmith@gmail.com"
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
      class="mt-2 py-6 w-100"
      color="primary"
      @click="submitMessage(validate)"
    >
      Submit
    </v-btn>
  </Form>
</template>

<script lang="ts">
import { validationSchema } from "@/utility/validation";
import { Form, Field, ValidationResult } from "vee-validate";
import { ContactInfo } from "./types/contactForm.types";

import axios from "axios";

export default defineComponent({
  name: "ContactForm",
  components: {
    Form,
    Field,
  },
  setup() {
    const contactInfo = ref<ContactInfo>({
      name: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    });

    const submitMessage = async (validateFn: Function): Promise<void> => {
      const valid: ValidationResult = await validateFn();

      if (valid.valid) {
        axios.post("https://usebasin.com/f/5d041ec64531", contactInfo);
      }
    };

    return {
      validationSchema,
      contactInfo,
      submitMessage,
    };
  },
});
</script>
