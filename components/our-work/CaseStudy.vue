<template>
  <div
    class="max-width my-10 d-flex justify-center flex-wrap"
    id="case-study-view"
  >
    <div
      class="case-study my-6"
      v-for="(caseStudy, i) in caseStudyList"
      :item="caseStudy"
      :key="`case-study-${i}`"
    >
      <img :src="caseStudy.img" alt="Project IMG" />

      <div class="mt-2">
        <p class="my-0" style="font-size: 14px">
          {{ caseStudy.subheading }}
        </p>
        <h2 class="mb-2">{{ caseStudy.title }}</h2>
        <p class="my-0">{{ caseStudy.desc }}</p>
        <p
          style="cursor: pointer"
          class="primary--text my-0 mt-4"
          @click="caseStudyToggleModal(caseStudy)"
        >
          View More
        </p>
      </div>
    </div>

    <CaseStudyDetailedModal v-model="isModalOpen" :item="selectedCaseStudy" />
  </div>
</template>

<script lang="ts">
import { caseStudyListData } from "./data/caseStudy.data";
import { CaseStudyData } from "./types/caseStudy.types";
import CaseStudyDetailedModal from "./components/CaseStudyDetailedModal.vue";

export default defineComponent({
  name: "CaseStudy",
  components: {
    CaseStudyDetailedModal,
  },
  setup() {
    const caseStudyList: CaseStudyData[] = caseStudyListData;

    const isModalOpen = ref<boolean>(false);
    const selectedCaseStudy = ref<CaseStudyData>(null);

    const caseStudyToggleModal = (caseStudy: CaseStudyData): void => {
      selectedCaseStudy.value = caseStudy;
      isModalOpen.value = true;
    };

    return {
      caseStudyList,
      selectedCaseStudy,
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
</style>
