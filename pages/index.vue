<template>
  <div>
    <Header
      title="Build A-Dream <br/> Landscape Gardening"
      subHeading="Dream gardens that don't cost the earth"
    />
    <Services :windowWidth="windowWidth" />
    <About />
    <Projects />
    <Reviews />
    <Contact />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import Header from "../components/shared/components/Header.vue";
import Services from "../components/home/services/Services.vue";
import Projects from "../components/home/projects/Projects.vue";
import Reviews from "../components/home/reviews/Reviews.vue";
import Contact from "../components/home/contact/Contact.vue";
import About from "../components/home/about/About.vue";

export default defineComponent({
  name: "Index",
  components: {
    Header,
    Services,
    Projects,
    Reviews,
    Contact,
    About,
  },
  setup() {
    const windowWidth = ref<number>(0);

    onMounted(() => {
      if (!process.browser) return;

      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    });

    return {
      windowWidth,
    };
  },
});
</script>
