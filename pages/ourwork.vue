<template>
  <div>
    <Header title="Our Work" height="40vh" />
    <CaseStudy />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/shared/components/Header.vue";
import CaseStudy from "@/components/our-work/CaseStudy.vue";

export default defineComponent({
  name: "OurWork",
  components: {
    Header,
    CaseStudy,
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
