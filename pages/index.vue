<template>
  <!-- Header -->
  <Header
    title="Build A-Dream"
    sub-title="Dream gardens that don’t cost the earth"
  >
    <p class="xf-mt-4 xf-mb-8 xf-text-14">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur. Dignissim sed sed egestas facilisis. Quis id quam cras
      consequat mattis.
    </p>

    <div class="xf-flex">
      <XfButton class="xf-mr-2" text-colour="primary" background-colour="white">
        View our work
      </XfButton>
      <XfButton background-colour="white" :outlined="true">
        Contact us
      </XfButton>
    </div>
  </Header>

  <!-- About me -->
  <div class="bd-about bd-max-width xf-p-4 xf-py-8">
    <XfBanner
      class="xf-mx-auto xf-my-4"
      :font-size="32"
      background-colour="primary"
    >
      About us
    </XfBanner>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur. Dignissim sed sed egestas facilisis. Quis id quam cras
      consequat mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent proin ac bibendum id ut ut suspendisse. Pharetra viverra ipsum
      non viverra consectetur. Dignissim sed sed egestas facilisis. Quis id quam
      cras consequat mattis.
    </p>

    <img class="xf-mt-6 xf-w-100" src="~/assets/images/logo-big.png" />
  </div>

  <!-- Services -->
  <div class="bd-services xf-px-4 xf-py-6">
    <XfBanner
      class="xf-mx-auto xf-mt-4 xf-mb-6"
      :font-size="32"
      background-colour="white"
      text-colour="primary"
    >
      Services
    </XfBanner>

    <div class="bd-max-width xf-flex xf-flex-wrap xf-gap-3">
      <div
        v-for="(service, i) in services"
        :key="i"
        class="bd-services-item xf-p-4"
      >
        <XfIcon
          :class="{ 'xf-flex-order-1': i % 2 === 0 }"
          :src="getDynamicAsset(service.icon)"
        />

        <div :class="i % 2 === 0 ? 'xf-mr-4' : 'xf-ml-4'">
          <h3 class="xf-text-colour-primary">{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { XfButton, XfBanner, XfIcon } from "xf-cmpt-lib";

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
}
</style>
