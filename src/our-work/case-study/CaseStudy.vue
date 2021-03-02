<template>
  <div class="case-study">
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <div>
        <img :src="item.img" alt="Project IMG" />
        <div class="mt-2">
          <p class="my-0" style="font-size: 14px;">
            {{ item.subheading }}
          </p>
          <h2 class="mb-2">{{ item.title }}</h2>
          <p class="my-0">{{ item.desc }}</p>
          <p
            style="cursor: pointer;"
            class="primary--text my-0 mt-4"
            @click="caseStudyToggleModal"
          >
            View More
          </p>
        </div>
      </div>
    </v-lazy>
    <CaseStudyDetailedModal
      :isModalOpen="isModalOpen"
      :item="item"
      @toggle-modal="caseStudyToggleModal"
    ></CaseStudyDetailedModal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CaseStudyDetailedModal from "./CaseStudyDetailedModal.vue";

@Component({
  components: {
    CaseStudyDetailedModal,
  },
})
export default class CaseStudy extends Vue {
  @Prop()
  item!: CaseStudy;

  isActive: boolean = false;
  isModalOpen: boolean = false;

  caseStudyToggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
</script>
<style lang="scss">
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
