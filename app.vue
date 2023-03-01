<template>
  <div>
    <navbar />

    <nuxt-page />
  </div>
</template>

<script type="ts" setup></script>

<style lang="scss">
@import "xf-cmpt-lib/dist/cmpt-lib-ts.css";
@import "@/assets/styles/index.scss";

a {
  text-decoration: none;

  &:hover {
    color: map-get($bd-colours, "primary");
  }
}
</style>
