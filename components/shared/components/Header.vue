<template>
  <v-row
    id="header"
    class="justify-space-around align-center ma-0 pa-0"
    :style="`height: ${height}`"
  >
    <v-col class="text-center" cols="12" md="9">
      <h1 class="ma-0" v-if="title">{{ title }}</h1>
      <p v-if="subHeading">
        {{ subHeading }}
      </p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    title: {
      type: String,
      default: "",
    },
    titleTwo: {
      type: String,
      default: "",
    },
    subHeading: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "55vh",
    },
  },
});
</script>

<style lang="scss" scoped>
#header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../../assets/img/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-shadow: 2px 2px 4px #111;
  letter-spacing: 1.6px;
  color: white;

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
