<template>
  <div>
    <Header titleOne="Our Work" height="45vh"></Header>
    <CaseStudyView></CaseStudyView>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/shared/components/Header.vue";
import CaseStudyView from "./case-study/CaseStudyView.vue";

@Component({
  components: {
    Header,
    CaseStudyView,
  },
})
export default class OurWork extends Vue {}
</script>
