<template>
  <div>
    <navbar />

    <nuxt-page />
  </div>
</template>

<script type="ts" setup></script>

<style lang="scss">
@import "xf-cmpt-lib/dist/cmpt-lib-ts.css";

a {
  text-decoration: none;

  &:hover {
    color: green;
  }
}
</style>
