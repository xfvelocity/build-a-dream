<template>
  <v-dialog
    class="case-study-modal"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card class="">
      <div class="d-flex align-center mr-2 mt-2">
        <v-spacer />
        <v-icon size="small" @click="toggleModal">mdi-close</v-icon>
      </div>
      <div class="pa-4 pt-0">
        <h3 class="mb-2 text-center">{{ item.title }}</h3>
        <vueper-slides fade>
          <vueper-slide
            v-for="(img, i) in item.detailedImgList"
            :key="i"
            :image="img"
          />
        </vueper-slides>

        <!-- <carousel>
          <slide
            class="cursor-pointer"
            v-for="(img, i) in item.detailedImgList"
            :key="i"
          >
            <div class="carousel-item">
              <img
                style="width: 100%; transform: translateY(6px)"
                :src="img"
                :alt="item.title"
              />
            </div>
          </slide>

          <template #addons>
            <pagination
              class="carousel-actions mt-2"
              style="--vc-pgn-background-color: #b3b3b3"
            />
          </template>
        </carousel> -->
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType } from "vue";
import { CaseStudyData } from "../types/caseStudy.types";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import { VueperSlides, VueperSlide } from "vueperslides";

export default defineComponent({
  name: "CaseStudyDetailedModal",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    VueperSlides,
    VueperSlide,
  },
  props: {
    item: {
      type: Object as PropType<CaseStudyData>,
      default: () => ({}),
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const carousel = ref<number>(0);

    const toggleModal = (): void => {
      context.emit("update:modelValue");
    };

    return {
      carousel,
      toggleModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.case-study-modal {
  :deep(.v-overlay__content) {
    max-width: none !important;
    width: 90% !important;
  }

  .vueperslides {
    height: 250px;
    width: 250px;

    :deep(.vueperslides__inner),
    :deep(.vueperslides__parallax-wrapper) {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 769px) {
      height: 400px;
      width: 400px;
    }
  }
}
</style>
