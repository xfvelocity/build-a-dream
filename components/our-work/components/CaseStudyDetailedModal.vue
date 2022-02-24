<template>
  <v-dialog
    id="case-study-modal"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card class="pa-4">
      <h3 class="mb-4 text-center">{{ item.title }}</h3>

      <carousel wrap-around :autoplay="3000">
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
      </carousel>

      <div class="d-flex mt-4">
        <v-spacer />
        <v-btn color="red" variant="text" @click="toggleModal">Close</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType } from "vue";
import { CaseStudyData } from "../types/caseStudy.types";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "CaseStudyDetailedModal",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
