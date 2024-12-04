<template>
  <div class="section-title text-center mb-10">
    <h2
      :class="{ 'section-title-underline': underline }"
      :style="`width: ${width}px;`"
    >
      {{ title }}
    </h2>

    <p class="my-0">
      {{ desc }}

      <nuxt-link v-if="link" class="link text-primary" :to="link.to">
        {{ link.name }}
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { TitleLink } from "./types/sectionTitle.types";
import type { PropType } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 150,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Object as PropType<TitleLink>,
  },
});
</script>

<style lang="scss" scoped>
.section-title {
  h2 {
    margin: 10px auto;
  }

  &-underline {
    border-bottom: 1px solid #086500;
  }

  p {
    width: 80%;
    margin: 0 auto;
    max-width: 400px;
  }
}
</style>
