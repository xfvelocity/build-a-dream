<template>
  <v-row
    :style="`height: ${height}`"
    id="header"
    class="justify-space-around align-center ma-0 pa-0"
  >
    <v-col class="text-center" cols="12" md="9">
      <h1 class="white--text ma-0" v-if="title" v-html="title">{{ title }}</h1>
      <p class="white--text" v-if="subHeading">
        {{ subHeading }}
      </p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop()
  title!: string;
  @Prop()
  titleTwo!: string;
  @Prop()
  subHeading!: string;
  @Prop({ default: "55vh" })
  height!: string;
}
</script>
<style lang="scss">
#header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../../assets/img/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
