<template>
  <!-- Header -->
  <Header
    title="Build A-Dream"
    sub-title="Dream gardens that don’t cost the earth"
  >
    <p class="xf-mt-4 xf-mb-8 xf-text-14">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur.
    </p>

    <div class="xf-flex">
      <xf-button
        class="xf-mr-2"
        text-colour="primary"
        background-colour="white"
      >
        View our work
      </xf-button>
      <xf-button background-colour="white" :outlined="true">
        Contact us
      </xf-button>
    </div>
  </Header>

  <!-- About me -->
  <div class="bd-about bd-max-width xf-px-4 xf-py-8">
    <xf-banner
      class="xf-mx-auto xf-mb-6"
      :font-size="32"
      background-colour="primary"
    >
      About us
    </xf-banner>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur. Dignissim sed sed egestas facilisis. Quis id quam cras
      consequat mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent proin ac bibendum id ut ut suspendisse. Pharetra viverra ipsum
      non viverra consectetur. Dignissim sed sed egestas facilisis. Quis id quam
      cras consequat mattis.
    </p>

    <img class="xf-my-6 xf-w-100" src="~/assets/images/logo-big.png" />
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
    <div class="bd-center">
      <div class="xf-text-colour-white xf-text-center xf-mb-8">
        <h2>What our customers say</h2>
        <p class="xf-mt-1 xf-text-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit praesent proin
          ac.
        </p>
      </div>

      <review-carousel :slides="reviewSlides" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfButton, XfBanner, XfIcon } from "xf-cmpt-lib";

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
</script>

<style lang="scss" scoped>
.bd {
  &-about {
    img {
      border: 1px solid black;
      border-radius: 20px;
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
}
</style>
