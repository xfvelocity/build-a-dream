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
      <div class="pa-4 pt-2">
        <div class="case-study-modal-section">
          <div class="case-study-modal-section-main">
            <img
              class="case-study-modal-img w-100 h-100"
              :src="`./img/${selectedImage}.jpg`"
            />
          </div>

          <div class="case-study-modal-section-side">
            <template v-for="i in 5">
              <div
                v-if="item.detailedImgList[i - 1]"
                class="case-study-modal-img"
                :class="[
                  selectedImage === item.detailedImgList[i - 1]
                    ? 'case-study-modal-img-active'
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
                class="case-study-modal-section-no-img"
                :class="{
                  'mr-1': i !== 5,
                }"
                v-else
              />
            </template>
          </div>
        </div>

        <div class="my-6">
          <p class="text-primary my-0 text-12">
            {{ item.subheading }}
          </p>
          <h2 class="mb-1">{{ item.title }}</h2>
          <p class="my-0 text-14">{{ item.desc }}</p>
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

    &-active {
      filter: brightness(0.5);
    }
  }

  &-section {
    &-side {
      height: 100%;
      width: 100%;
      display: flex;

      .case-study-modal-img {
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
    max-width: 800px !important;
  }
}

.v-window {
  height: max-content !important;
}
</style>
