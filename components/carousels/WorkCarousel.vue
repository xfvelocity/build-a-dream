<template>
  <carousel class="bd-work-carousel" :items-to-show="1">
    <slide v-for="(slide, i) in slides" :key="i">
      <div
        class="xf-grid xf-cursor-pointer bd-max-width xf-mx-auto"
        @click="router.push(`/work?post=${slide.id}`)"
      >
        <img class="xf-col-12" :src="getDynamicAsset(slide.image)" alt="" />

        <div class="xf-col-12 xf-my-4">
          <h3 class="xf-text-colour-primary">{{ slide.title }}</h3>
          <p class="xf-mb-4">{{ slide.desc }}</p>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { WorkCarousel } from "~/utils/types/app.types";

// ** Props **
defineProps<{
  slides: WorkCarousel[];
}>();

// ** Data **
const router = useRouter();
</script>

<style lang="scss" scoped>
.bd-work-carousel {
  &-slide {
    display: flex;
  }
}
</style>
