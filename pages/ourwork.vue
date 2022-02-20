<template>
  <div>
    <Header title="Our Work" height="30vh" />
    <CaseStudyView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/shared/components/Header.vue";
import CaseStudyView from "@/components/our-work/case-study/CaseStudyView.vue";

export default defineComponent({
  name: "OurWork",
  components: {
    Header,
    CaseStudyView,
  },
  head: {
    title: "Our Work | Build A-Dream | Lincoln Landscape Gardeners",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Take a look at our work which we've completed, landscaping services such as fencing, patio, decking, turfing etc.",
      },
    ],
  },
});
</script>
