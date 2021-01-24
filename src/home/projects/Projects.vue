<template>
  <div class="max-width my-12" id="projects">
    <div class="text-center mb-10">
      <h2>Recent Projects</h2>
      <p class="my-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        consectetur aperiam nobis quis.
      </p>
    </div>
    <div class="my-8 d-flex flex-wrap justify-center align-center">
      <img
        class="ma-1"
        style="border: 1px solid #e5e5e5"
        v-for="(img, i) in imgList"
        :key="i"
        :src="img"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Projects extends Vue {
  imgList: string[] = [
    require("@/assets/home/1.jpg"),
    require("@/assets/home/2.jpg"),
    require("@/assets/home/3.jpg"),
    require("@/assets/home/4.jpg"),
    require("@/assets/home/5.jpg"),
    require("@/assets/home/6.jpg"),
  ];
}
</script>
<style lang="scss">
#projects {
  width: 90%;
  margin: 0 auto;
  h2 {
    width: 180px;
    margin: 10px auto;
    border-bottom: 1px solid #086500;
  }
  p {
      width: 80%;
      margin: 0 auto;
      max-width: 400px;
  }
  @media (min-width: 600px) {
    img {
      width: 45%;
      max-width: 420px;
    }
  }
}
</style>
