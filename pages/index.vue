<template>
  <div>
    <Header
      title="Build A-Dream <br/> Landscape Gardening"
      subHeading="Dream gardens that don't cost the earth"
    ></Header>
    <Services :windowWidth="windowWidth"></Services>
    <About></About>
    <Projects></Projects>
    <Reviews></Reviews>
    <Contact></Contact>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "../components/shared/components/Header.vue";
import Services from "../components/home/services/Services.vue";
import Projects from "../components/home/projects/Projects.vue";
import Reviews from "../components/home/reviews/Reviews.vue";
import Contact from "../components/home/contact/Contact.vue";
import About from "../components/home/about/About.vue";

@Component({
  components: {
    Header,
    Services,
    Projects,
    Reviews,
    Contact,
    About,
  },
})
export default class Home extends Vue {
  windowWidth: number = 0;

  get isMobile(): boolean {
    return this.windowWidth < 960;
  }

  mounted(): void {
    if (!process.browser) return;
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
}
</script>
