<template>
  <v-app>
    <ContactBar v-if="!isMobile"></ContactBar>
    <MobileNavBar v-if="isMobile"></MobileNavBar>
    <NavBar v-if="!isMobile"></NavBar>
    <v-main class="pa-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MobileNavBar from "./nav-bar/MobileNavBar.vue";
import NavBar from "./nav-bar/NavBar.vue";
import ContactBar from "./nav-bar/ContactBar.vue";

@Component({
  components: {
    NavBar,
    MobileNavBar,
    ContactBar,
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
