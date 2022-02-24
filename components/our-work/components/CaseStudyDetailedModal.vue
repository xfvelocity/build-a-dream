<template>
  <v-dialog
    id="case-study-modal"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card class="pa-4">
      <h3 class="mb-4 text-center">{{ item.title }}</h3>

      <!-- <v-carousel
        height="auto"
        v-model="carousel"
        delimiter-icon="fa-circle"
        style="width: 680px; margin: 0 auto"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(img, i) in item.detailedImgList"
          :key="i"
          eager
        >
          <div class="carousel-item">
            <img
              style="width: 100%; transform: translateY(6px)"
              :src="img"
              :alt="item.title"
            />
          </div>
        </v-carousel-item>
      </v-carousel> -->

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

export default defineComponent({
  name: "CaseStudyDetailedModal",
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
