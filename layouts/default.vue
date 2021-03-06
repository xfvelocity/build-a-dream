<template>
  <v-app>
    <ContactBar v-if="!isMobile"></ContactBar>
    <MobileNavBar v-if="isMobile"></MobileNavBar>
    <NavBar v-if="!isMobile"></NavBar>
    <v-main class="pa-0">
      <nuxt />
    </v-main>
    <Footer :windowWidth="windowWidth"></Footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MobileNavBar from "../components/nav-bar/MobileNavBar.vue";
import NavBar from "../components/nav-bar/NavBar.vue";
import ContactBar from "../components/nav-bar/ContactBar.vue";
import Footer from "../components/footer/Footer.vue";

@Component({
  components: {
    NavBar,
    MobileNavBar,
    ContactBar,
    Footer,
  },
})
export default class Layout extends Vue {
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
