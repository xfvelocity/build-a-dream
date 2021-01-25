<template>
  <div>
    <Header
      titleOne="Build A-Dream"
      titleTwo="Landscape Gardening"
      subHeading="Dream gardens that don't cost the earth"
    ></Header>
    <Services :isMobile="isMobile"></Services>
    <About></About>
    <Projects></Projects>
    <Reviews></Reviews>
    <Contact></Contact>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/shared/components/Header.vue";
import Services from "./services/Services.vue";
import Projects from "./projects/Projects.vue";
import Reviews from "./reviews/Reviews.vue";
import Contact from "./contact/Contact.vue";
import About from "./about/About.vue";

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
  created(): void {
    document.title = "Build A-Dream | Home";
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
}
</script>
