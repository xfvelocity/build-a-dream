<!-- <template>
  <v-dialog
    width="750"
    v-model="isModalOpen"
    @click:outside="toggleModal"
    id="case-study-modal"
  >
    <v-card class="pa-4">
      <h3 class="mb-4 text-center">{{ item.title }}</h3>
      <v-carousel
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
      </v-carousel>
      <div class="d-flex mt-4">
        <v-spacer></v-spacer>
        <v-btn text color="red" @click="toggleModal">Close</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { CaseStudyType } from "./data/caseStudyList";

export default defineComponent({
  name: "CaseStudyDetailedModal",
  props: {
    item: {
      type: Object as PropType<CaseStudyType>,
      default: () => ({}),
    },
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["toggle-modal"],
  setup(props, context) {
    const carousel = ref<number>(0);

    const toggleModal = (): void => {
      context.emit("toggle-modal");
    };

    return {
      carousel,
      toggleModal,
    };
  },
});
</script> -->
