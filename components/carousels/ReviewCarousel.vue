<template>
  <carousel class="bd-review-carousel" :items-to-show="1" wrap-around>
    <slide v-for="(slide, i) in slides" :key="i">
      <div class="bd-max-width xf-mx-auto xf-text-colour-white xf-mb-4">
        <p>"{{ slide.review }}"</p>
        <h4 class="xf-mt-4 xf-fw-700">{{ slide.name }}</h4>
      </div>
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { ReviewCarousel } from "~/utils/types/app.types";

// ** Props **
defineProps<{
  slides: ReviewCarousel[];
}>();
</script>

<style lang="scss">
.bd-review-carousel {
  p {
    user-select: none;
  }

  .carousel {
    &__pagination {
      display: flex;
      align-items: center;

      &-item:first-child,
      &-item:last-child {
        .carousel__pagination-button::after {
          height: 12px;
          width: 12px;
        }
      }

      &-button {
        &::after {
          border: 2px solid white;
          background: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
        }

        &--active::after {
          border: none;
          background: white;
        }
      }
    }
  }
}
</style>
