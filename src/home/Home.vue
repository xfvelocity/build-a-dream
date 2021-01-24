<template>
  <div>
    <Header></Header>
    <Services :isMobile="isMobile"></Services>
    <Projects></Projects>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "./header/Header.vue";
import Services from "./services/Services.vue";
import Projects from "./projects/Projects.vue";

@Component({
  components: {
    Header,
    Services,
    Projects,
  },
})
export default class Home extends Vue {
  windowWidth: number = 0;

  get isMobile(): boolean {
    return this.windowWidth < 960;
  }
  created(): void {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
}
</script>
