<template>
  <v-app>
    <MobileNavBar v-if="isMobile"></MobileNavBar>
    <NavBar v-if="!isMobile"></NavBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MobileNavBar from "./nav-bar/MobileNavBar.vue";
import NavBar from "./nav-bar/NavBar.vue";

@Component({
  components: {
    NavBar,
    MobileNavBar,
  },
})
export default class App extends Vue {
  windowWidth: number = 0;

  get isMobile(): boolean {
    return this.windowWidth < 960;
  }

  mounted(): void {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  }
}
</script>
