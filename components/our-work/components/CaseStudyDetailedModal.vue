<template>
  <v-dialog
    class="case-study-modal"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card>
      <div class="d-flex align-center mr-2 mt-2">
        <v-spacer />
        <v-icon size="small" @click="toggleModal">mdi-close</v-icon>
      </div>
      <div class="pa-4 pt-0">
        <h3 class="mb-2 text-center">{{ item.title }}</h3>
        <v-carousel progress="primary" continuous hide-delimiters>
          <v-carousel-item v-for="(img, i) in item.detailedImgList" :key="i">
            <img :src="img" style="width: 100%" />
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType, onBeforeMount } from "vue";
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
    const toggleModal = (): void => {
      context.emit("update:modelValue");
    };

    return {
      toggleModal,
    };
  },
});
</script>

<style lang="scss">
.v-overlay {
  &__content {
    max-width: 450px !important;
    width: 90% !important;

    @media (min-width: 1024px) {
      max-width: 600px !important;
    }
  }
}

.v-window {
  height: max-content !important;
}
</style>
