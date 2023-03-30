<template>
  <header class="bd-header">
    <div class="bd-header-content bd-max-width xf-p-6 xf-center xf-text-center">
      <h1>{{ title }}</h1>
      <h5 v-if="subTitle" class="xf-text-12">{{ subTitle }}</h5>

      <slot />
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  subTitle?: string;
}>();
</script>

<style lang="scss" scoped>
.bd-header {
  position: relative;
  background: url("~/assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 450px;

  &-content {
    color: white;
    width: 85%;
    background: linear-gradient(
      180deg,
      #086500 0%,
      rgba(8, 101, 0, 0.791042) 85.42%,
      rgba(8, 101, 0, 0.66) 100%
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
