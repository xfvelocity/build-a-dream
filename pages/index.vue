<template>
  <Header
    title="Build A-Dream"
    sub-title="Dream gardens that don’t cost the earth"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent proin ac
      bibendum id ut ut suspendisse. Pharetra viverra ipsum non viverra
      consectetur. Dignissim sed sed egestas facilisis. Quis id quam cras
      consequat mattis.
    </p>

    <div class="xf-mt-4">
      <XfButton class="xf-mr-2" text-colour="primary" background-colour="white">
        View our work
      </XfButton>
      <XfButton background-colour="white" :outlined="true">
        Contact us
      </XfButton>
    </div>
  </Header>
</template>

<script lang="ts" setup>
import { XfButton } from "xf-cmpt-lib";
</script>

<style lang="scss" scoped></style>
