<template>
  <v-dialog
    v-if="modelValue"
    class="project-modal"
    :fullscreen="isMobile"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card>
      <v-card
        class="bg-primary d-flex align-center py-4 rounded-0"
        :class="isMobile ? 'px-6' : 'px-8 rounded-t'"
      >
        <h3>{{ item.title }}</h3>
        <v-spacer />
        <v-icon class="cursor-pointer pa-2" @click="toggleModal">
          mdi-close
        </v-icon>
      </v-card>

      <div :class="isMobile ? 'pa-6' : 'pa-8'">
        <div class="project-modal-section">
          <div class="project-modal-section-main">
            <img
              class="project-modal-img w-100 h-100"
              :src="`./img/${selectedImage}.jpg`"
            />
          </div>

          <div class="project-modal-section-side">
            <template v-for="i in 5">
              <div
                v-if="item.detailedImgList[i - 1]"
                class="project-modal-img"
                :class="[
                  selectedImage === item.detailedImgList[i - 1]
                    ? 'project-modal-img-active'
                    : 'cursor-pointer',
                  {
                    'mr-1': i !== 5,
                  },
                ]"
              >
                <img
                  class="w-100 h-100"
                  :src="`./img/${item.detailedImgList[i - 1]}.jpg`"
                  @click="selectedImage = item.detailedImgList[i - 1]"
                />
              </div>
              <div
                class="project-modal-section-no-img"
                :class="{
                  'mr-1': i !== 5,
                }"
                v-else
              />
            </template>
          </div>
        </div>

        <p class="my-3 text-18">{{ item.desc }}</p>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Project } from "@/types/app.types";
import { isMobile } from "@/utility/width";

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
    // Variables
    const selectedImage = ref<string>("");

    // Methods
    const toggleModal = (): void => {
      context.emit("update:modelValue");
    };

    // Watchers
    watch(
      () => props.item,
      () => {
        selectedImage.value = props.item.img;
      },
      { immediate: true }
    );

    return {
      isMobile,
      selectedImage,
      toggleModal,
    };
  },
});
</script>

<style lang="scss">
.project-modal {
  &-img {
    border: 1px solid #828282;

    &-active {
      filter: brightness(0.5);
    }
  }

  &-section {
    &-side {
      height: 100%;
      width: 100%;
      display: flex;

      .project-modal-img {
        width: 20%;
      }
    }

    &-no-img {
      width: 20%;
      background: rgb(230, 230, 230);
    }
  }
}

.v-overlay {
  &__content {
    @media (min-width: 768px) {
      width: 95% !important;
      max-width: 600px !important;
    }

    @media (min-width: 1024px) {
      max-width: 700px !important;
    }
  }
}

.v-window {
  height: max-content !important;
}
</style>
