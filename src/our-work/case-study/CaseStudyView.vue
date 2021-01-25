<template>
  <div  class="max-width my-10 d-flex justify-center flex-wrap">
    <CaseStudy
      v-for="(caseStudy, i) in caseStudyList"
      class="my-6"
      :key="i"
      :img="caseStudy.img"
      :subheading="caseStudy.subheading"
      :title="caseStudy.title"
      :desc="caseStudy.desc"
    ></CaseStudy>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CaseStudy from "./CaseStudy.vue";
import { caseStudyList, CaseStudyType } from "./data/caseStudyList";

@Component({
  components: {
    CaseStudy,
  },
})
export default class CaseStudyView extends Vue {
  caseStudyList: CaseStudyType[] = caseStudyList;
}
</script>
