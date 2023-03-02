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
    <XfBanner class="xf-mx-auto xf-my-4" background-colour="primary">
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
</template>

<script lang="ts" setup>
import { XfButton, XfBanner } from "xf-cmpt-lib";
</script>

<style lang="scss" scoped>
.bd {
  &-about {
    img {
      border: 1px solid black;
      border-radius: 20px;
    }
  }
}
</style>
