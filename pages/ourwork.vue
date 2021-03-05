<template>
  <div>
    <Header title="Our Work" height="30vh"></Header>
    <CaseStudyView></CaseStudyView>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/shared/components/Header.vue";
import CaseStudyView from "@/components/our-work/case-study/CaseStudyView.vue";

@Component({
  components: {
    Header,
    CaseStudyView,
  },
})
export default class OurWork extends Vue {}
</script>
