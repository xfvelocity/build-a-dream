<!-- <template>
  <div
    class="max-width my-10 d-flex justify-center flex-wrap"
    id="case-study-view"
  >
    <CaseStudy
      v-for="(caseStudy, i) in caseStudyList"
      :item="caseStudy"
      class="my-6"
      :key="i"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CaseStudy from "./CaseStudy.vue";
import { caseStudyListData, CaseStudyType } from "./data/caseStudyList";

export default defineComponent({
  name: "CaseStudyView",
  components: {
    CaseStudy,
  },
  setup() {
    const caseStudyList: CaseStudyType[] = caseStudyListData;

    return {
      caseStudyList,
    };
  },
});
</script> -->
