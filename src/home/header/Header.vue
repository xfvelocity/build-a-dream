<template>
  <v-row id="header" class="justify-space-around align-center ma-0 pa-0">
    <v-col class="text-center" cols="12" md="9">
      <h1 class="white--text">Build A-Dream</h1>
      <p class="white--text my-0">
        Dream gardens that don’t cost the earth
      </p>
      <div class="mt-8">
        <v-btn color="white" outlined class="mr-2">Our Work</v-btn>
        <v-btn color="white" outlined>Contact</v-btn>
      </div>
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
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../assets/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 45vh;
  text-shadow: 2px 2px 4px #111;
  h1 {
    font-size: 40px;
  }
  @media (min-width: 960px) {
    h1 {
      font-size: 64px;
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
