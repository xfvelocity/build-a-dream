<template>
  <div>
    <Navbar />

    <NuxtPage />
  </div>
</template>

<script type="ts" setup></script>

<style lang="scss">
@import "vue3-carousel/dist/carousel.css";
@import "xf-cmpt-lib/dist/cmpt-lib-ts.css";
@import "@/assets/styles/index.scss";

a {
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: map-get($bd-colours, "primary");
  }
}
</style>
