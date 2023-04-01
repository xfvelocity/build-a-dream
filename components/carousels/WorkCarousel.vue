<template>
  <carousel class="bd-work-carousel" :items-to-show="1" wrap-around>
    <slide v-for="(slide, i) in slides" :key="i">
      <div
        class="xf-grid xf-cursor-pointer bd-max-width xf-mx-auto"
        @click="router.push(`/work?post=${slide.id}`)"
      >
        <img
          class="xf-col-12 xf-border-colour-grey"
          :src="getDynamicAsset(slide.images[0])"
          alt=""
        />

        <div class="xf-col-12 xf-my-4">
          <h3 class="xf-text-colour-primary">{{ slide.title }}</h3>
          <p>{{ slide.desc }}</p>
        </div>
      </div>
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { WorkCarousel } from "~/utils/types/app.types";

// ** Props **
defineProps<{
  slides: WorkCarousel[];
}>();

// ** Data **
const router = useRouter();
</script>

<style lang="scss">
.bd-work-carousel {
  img {
    border: 1px solid;
    border-radius: 5px;
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

      &-item:nth-child(3) {
        .carousel__pagination-button::after {
          height: 20px;
          width: 20px;
        }
      }

      &-button {
        &::after {
          border: 2px solid grey;
          background: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
        }

        &--active::after {
          border: none;
          background: map-get($bd-colours, "primary") !important;
        }
      }
    }
  }
}
</style>
