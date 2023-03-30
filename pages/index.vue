<template>
  <!-- Header -->
  <bd-header
    title="Build A-Dream"
    sub-title="Dream gardens that don’t cost the earth"
  >
    <div class="xf-flex xf-flex-justify-content-center xf-mt-6">
      <xf-button
        class="xf-mr-2"
        text-colour="primary"
        :font-size="12"
        background-colour="white"
      >
        Our work
      </xf-button>

      <xf-button background-colour="white" :font-size="12" :outlined="true">
        Contact us
      </xf-button>
    </div>
  </bd-header>

  <!-- About me -->
  <div class="bd-about bd-max-width xf-px-4 xf-py-10">
    <xf-banner
      class="xf-mx-auto xf-mb-4"
      :font-size="32"
      background-colour="primary"
    >
      About us
    </xf-banner>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur. Dignissim sed sed egestas facilisis. Quis id quam cras
      consequat mattis.
    </p>

    <p class="xf-mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur. Dignissim sed sed egestas facilisis. Quis id quam cras
      consequat mattis.
    </p>

    <img
      class="xf-my-8 xf-w-100 xf-border-colour-grey"
      src="~/assets/images/logo-big.png"
    />
  </div>

  <!-- Services -->
  <div class="bd-services xf-px-4 xf-py-6">
    <xf-banner
      class="xf-mx-auto xf-mt-4 xf-mb-6"
      :font-size="32"
      background-colour="white"
      text-colour="primary"
    >
      Services
    </xf-banner>

    <!-- <div class="bd-max-width xf-flex xf-flex-wrap xf-gap-3">
      <div
        v-for="(service, i) in services"
        :key="i"
        class="bd-services-item xf-p-4"
      >
        <xf-icon
          :class="{ 'xf-flex-order-1': i % 2 === 0 }"
          :src="getDynamicAsset(service.icon)"
          :size="128"
        />

        <div :class="i % 2 === 0 ? 'xf-mr-4' : 'xf-ml-4'">
          <h3 class="xf-text-colour-primary">{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </div>
      </div>
    </div> -->
  </div>

  <!-- Our work -->
  <div class="bd-our-work xf-my-8">
    <xf-banner
      class="xf-mx-auto xf-my-4"
      :font-size="32"
      background-colour="primary"
    >
      Our work
    </xf-banner>

    <p class="bd-max-width xf-text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
    </p>

    <work-carousel class="xf-my-6" :slides="workSlides" />
  </div>

  <!-- Reviews -->
  <div class="bd-reviews xf-position-relative">
    <div class="xf-center">
      <div class="xf-text-colour-white xf-text-center xf-mb-8 bd-max-width">
        <h2>What our customers say</h2>
        <p class="xf-mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent proin
          ac.
        </p>
      </div>

      <review-carousel :slides="reviewSlides" />
    </div>
  </div>

  <!-- Contact us -->
  <div class="bd-contact bd-max-width xf-pt-10 xf-pb-6">
    <xf-banner
      class="xf-mx-auto xf-mb-2"
      :font-size="32"
      background-colour="primary"
    >
      Contact us
    </xf-banner>

    <p class="xf-text-center">Lorem ipsum dolor sit amet consectetur.</p>

    <div class="bd-contact-form xf-grid xf-mt-2 xf-mb-6">
      <xf-text-input v-model="contact.name" class="xf-col-6" label="Name" />
      <xf-text-input
        v-model="contact.phone"
        class="xf-col-6"
        type="tel"
        label="Phone number"
      />
      <xf-text-input
        v-model="contact.email"
        class="xf-col-12"
        label="Email"
        type="email"
      />
      <!-- TODO: UPDATE WITH TEXT AREA -->
      <xf-text-input
        v-model="contact.message"
        class="xf-col-12"
        label="Message"
      />

      <xf-button
        class="xf-mt-4 xf-col-12 xf-w-100"
        background-colour="primary"
        @click="submitForm"
      >
        Submit
      </xf-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfButton, XfBanner, XfIcon, XfTextInput } from "xf-cmpt-lib";
import { ContactForm } from "@/utils/types/app.types";

const reviewSlides = [
  {
    review:
      "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent, I have no hesitation in recommending him.",
    name: "Keith Duke",
  },
  {
    review:
      "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent, I have no hesitation in recommending him.",
    name: "Keith Duke",
  },
  {
    review:
      "Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent, I have no hesitation in recommending him.",
    name: "Keith Duke",
  },
];

const workSlides = [
  {
    id: 1,
    title: "Indian Sandstone Patio",
    desc: "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    image: "images/1.png",
  },
  {
    id: 2,
    title: "Indian Sandstone Patio",
    desc: "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    image: "images/1.png",
  },
  {
    id: 3,
    title: "Indian Sandstone Patio",
    desc: "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    image: "images/1.png",
  },
  {
    id: 4,
    title: "Indian Sandstone Patio",
    desc: "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    image: "images/1.png",
  },
  {
    id: 5,
    title: "Indian Sandstone Patio",
    desc: "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    image: "images/1.png",
  },
];

const services = [
  {
    title: "Landscaping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mi nulla massa.",
    icon: "icons/tree.svg",
  },
  {
    title: "Landscaping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mi nulla massa.",
    icon: "icons/tree.svg",
  },
  {
    title: "Landscaping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mi nulla massa.",
    icon: "icons/tree.svg",
  },
  {
    title: "Landscaping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mi nulla massa.",
    icon: "icons/tree.svg",
  },
  {
    title: "Landscaping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mi nulla massa.",
    icon: "icons/tree.svg",
  },
  {
    title: "Landscaping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mi nulla massa.",
    icon: "icons/tree.svg",
  },
];

const contact = ref<ContactForm>({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const submitForm = (): void => {
  console.log(contact.value);
};
</script>

<style lang="scss" scoped>
.bd {
  &-about {
    img {
      border: 1px solid;
      border-radius: 5px;
    }
  }

  &-services {
    background: linear-gradient(
      120.64deg,
      rgba(8, 98, 0, 0.9) 16.11%,
      #053f00 86.85%
    );

    &-item {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 5px;
    }
  }

  &-reviews {
    height: 400px;
    background: url("~/assets/images/grass-background.png");
  }

  &-contact {
    &-form {
      max-width: 300px;
      width: 85%;
      margin: 0 auto;
    }
  }
}
</style>
