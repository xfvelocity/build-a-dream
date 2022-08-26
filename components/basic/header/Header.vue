<template>
  <div class="header" style="margin-top: 70px">
    <v-row
      class="justify-space-around align-center ma-0 pa-0"
      :style="`height: ${height}`"
    >
      <v-col class="text-center" cols="12" md="9">
        <h1 v-if="title">{{ title }}</h1>
        <h1 v-if="titleTwo">{{ titleTwo }}</h1>
        <p v-if="subHeading">
          {{ subHeading }}
        </p>
      </v-col>
    </v-row>

    <!-- <FuzzyImage
      img="/img/background.jpg"
      min-img="/img/background-min.jpg"
      background
    /> -->
  </div>
</template>

<script lang="ts">
// import FuzzyImage from "../fuzzy-image/FuzzyImage.vue";

export default defineComponent({
  name: "Header",
  components: {
    // FuzzyImage,
  },
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
    font-size: 40px;
    letter-spacing: 3px;
    line-height: 50px;
  }

  p {
    width: 60%;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 30px;
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
