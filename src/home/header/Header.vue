<template>
  <v-row id="header" class="justify-space-around align-center ma-0 pa-0">
    <v-col class="text-center" cols="12" md="9">
      <h1 class="white--text ma-0">Build A-Dream</h1>
      <h1 class="white--text ma-0">Landscape Gardening</h1>
      <p class="white--text">
        Dream gardens that don’t cost the earth
      </p>
      <!-- <div class="mt-2">
        <v-btn color="white" outlined class="mr-2" large>Our Work</v-btn>
        <v-btn color="white" outlined large>Contact</v-btn>
      </div> -->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
<style lang="scss">
#header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 55vh;
  text-shadow: 2px 2px 4px #111;
  letter-spacing: 1.6px;
  h1 {
    font-size: 40px;
  }
  p {
    width: 70%;
    margin: 20px auto;
  }
  @media (min-width: 960px) {
    line-height: 60px;
    h1 {
      font-size: 58px;
    }
    p {
      width: 100%;
      margin: 0;
      font-size: 20px;
    }
  }
}
</style>
