<template>
  <v-dialog
    class="case-study-modal"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card>
      <div class="d-flex align-center mr-2 mt-2">
        <v-spacer />
        <v-icon class="cursor-pointer" size="small" @click="toggleModal">
          mdi-close
        </v-icon>
      </div>
      <div class="pa-8 pt-2">
        <div class="case-study-modal-section">
          <div class="case-study-modal-section-main">
            <img
              class="case-study-modal-img w-100 h-100"
              :src="`./img/${selectedImage}.jpg`"
            />
          </div>

          <div class="case-study-modal-section-side">
            <img
              v-for="(img, i) in item.detailedImgList"
              :key="i"
              class="case-study-modal-img w-100 h-100"
              :src="`./img/${img}.jpg`"
              @click="selectedImage = img"
            />
          </div>
        </div>

        <div class="my-6">
          <p class="text-primary my-0 text-14">
            {{ item.subheading }}
          </p>
          <h2 class="mb-2">{{ item.title }}</h2>
          <p class="my-0 case-study-desc">{{ item.desc }}</p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Project } from "@/assets/types/app.types";

export default defineComponent({
  name: "ProjectModal",
  props: {
    item: {
      type: Object as PropType<Project>,
      default: () => ({}),
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const selectedImage = ref<string>("");

    const toggleModal = (): void => {
      context.emit("update:modelValue");
    };

    watch(
      () => props.item,
      () => {
        selectedImage.value = props.item.img;
      },
      { immediate: true }
    );

    return {
      selectedImage,
      toggleModal,
    };
  },
});
</script>

<style lang="scss">
.case-study-modal {
  &-img {
    border: 1px solid rgb(233, 233, 233);
  }

  &-section {
    display: flex;

    &-main {
      flex-grow: 3;
    }

    &-side {
      margin-left: 5px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
}

.v-overlay {
  &__content {
    width: 90% !important;
    max-width: 700px !important;
  }
}

.v-window {
  height: max-content !important;
}
</style>
