<template>
  <div>
    <Header
      title="Build A-Dream"
      titleTwo="Landscape Gardening"
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

    const getWindowWidth = (): void => {
      windowWidth.value = window.innerWidth;
      window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
      });
    };

    onMounted(() => {
      getWindowWidth();
    });

    return {
      windowWidth,
    };
  },
});
</script>
