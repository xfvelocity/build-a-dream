<template>
  <v-card :height="80" id="nav-bar">
    <v-app-bar class="py-2 d-flex align-center" :height="80">
      <div>
        <img src="@/assets/build-a-dream-logo.png" />
      </div>
      <div class="d-flex">
        <span class="nav-link" @click="goToLink('/')">Home</span>
        <span class="nav-link mx-4">Our Work</span>
        <span class="nav-link">Contact</span>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  goToLink(link: string): void {
    this.$router.push(link);
  }
}
</script>
<style lang="scss">
#nav-bar {
  .nav-link {
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
  .v-toolbar__content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
