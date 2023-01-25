<template>
  <div class="header" style="margin-top: 70px">
    <v-row
      class="justify-space-around align-center ma-0 pa-0"
      :style="`height: ${height}`"
    >
      <v-col class="header-text text-center" cols="12" md="9">
        <h1 v-if="title">{{ title }}</h1>
        <p v-if="subHeading">{{ subHeading }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "BdHeader",
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
      default: "65vh",
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  text-shadow: 2px 2px 4px #111;
  color: white;
  background: url("/img/background.jpg") no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 48px;
    line-height: 45px;
  }

  p {
    font-size: 16px;
    margin-top: 10px;
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
