<template>
  <carousel class="bd-review-carousel" :items-to-show="1" wrap-around>
    <slide v-for="(slide, i) in slides" :key="i">
      <div class="bd-max-width xf-mx-auto xf-text-colour-white">
        <p>"{{ slide.review }}"</p>
        <h4 class="xf-mt-4 xf-fw-700">{{ slide.name }}</h4>
      </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ReviewCarousel } from "~/utils/types/app.types";

// ** Props **
defineProps<{
  slides: ReviewCarousel[];
}>();
</script>

<style lang="scss">
.bd-review-carousel {
  .carousel {
    &__next,
    &__prev {
      color: white;
    }
  }
}
</style>
