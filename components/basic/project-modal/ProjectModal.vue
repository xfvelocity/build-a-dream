<template>
  <v-dialog
    v-if="modelValue"
    class="project-modal"
    :modelValue="modelValue"
    @click:outside="toggleModal"
  >
    <v-card>
      <div :class="isMobile ? 'pa-6' : 'pa-12'">
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

        <div class="my-6 mb-12">
          <h2>{{ item.title }}</h2>
          <p class="my-0 text-14">{{ item.desc }}</p>
        </div>

        <v-btn
          class="text-white w-100"
          color="primary"
          :size="isMobile ? 'small' : 'default'"
          @click="toggleModal"
        >
          Close
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Project } from "@/assets/types/app.types";
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
      background: rgb(220, 220, 220);
    }
  }
}

.v-overlay {
  &__content {
    width: 95% !important;
    max-width: 600px !important;

    @media (min-width: 1024px) {
      max-width: 700px !important;
    }
  }
}

.v-window {
  height: max-content !important;
}
</style>
