<!-- <template>
  <div class="case-study">
    <div>
      <img :src="item.img" alt="Project IMG" />
      <div class="mt-2">
        <p class="my-0" style="font-size: 14px">
          {{ item.subheading }}
        </p>
        <h2 class="mb-2">{{ item.title }}</h2>
        <p class="my-0">{{ item.desc }}</p>
        <p
          style="cursor: pointer"
          class="primary--text my-0 mt-4"
          @click="caseStudyToggleModal"
        >
          View More
        </p>
      </div>
    </div>
    <CaseStudyDetailedModal
      :isModalOpen="isModalOpen"
      :item="item"
      @toggle-modal="caseStudyToggleModal"
    ></CaseStudyDetailedModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import CaseStudyDetailedModal from "./CaseStudyDetailedModal.vue";
import { CaseStudyType } from "./data/caseStudyList";

export default defineComponent({
  name: "CaseStudy",
  components: {
    CaseStudyDetailedModal,
  },
  props: {
    item: {
      type: Object as PropType<CaseStudyType>,
      default: () => ({}),
    },
  },
  setup() {
    const isModalOpen = ref<boolean>(false);

    const caseStudyToggleModal = (): void => {
      isModalOpen.value = !isModalOpen.value;
    };

    return {
      isModalOpen,
      caseStudyToggleModal,
    };
  },
});
</script>

<style lang="scss" scoped>
#case-study-view {
  .case-study {
    width: 80%;
    margin: 20px auto;

    img {
      width: 100%;
      border: 1px solid #e5e5e5;
    }

    @media (min-width: 768px) {
      width: 45%;
    }

    @media (min-width: 1150px) {
      width: 30%;
      max-width: 450px;
    }
  }
}
</style> -->
