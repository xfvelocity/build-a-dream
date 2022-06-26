<template>
  <div>
    <Header title="Our Work" height="40vh" />
    <Project />
  </div>
</template>

<script lang="ts">
import Header from "@/components/shared/components/Header.vue";
import Project from "@/components/our-work/Project.vue";

export default defineComponent({
  name: "OurWork",
  components: {
    Header,
    Project,
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
