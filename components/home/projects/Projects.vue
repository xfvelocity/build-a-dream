<template>
  <!-- <v-lazy
    v-model="isActive"
    :options="{
      rootMargin: '-20px',
    }"
    min-height="200"
    transition="fade-transition"
  > -->
  <div class="max-width" id="projects">
    <SectionTitle
      title="Projects"
      desc="Here is a just a few examples of our work, if you wish to see more navigate to the our work page."
      :width="100"
    ></SectionTitle>
    <div class="my-8 d-flex flex-wrap justify-center align-center">
      <img
        class="ma-1"
        style="border: 1px solid #e5e5e5"
        v-for="(img, i) in imgList"
        :key="i"
        :src="img"
        alt="Landscaping Project Example"
      />
    </div>
  </div>
  <!-- </v-lazy> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionTitle from "../../shared/components/SectionTitle.vue";

@Component({
  components: {
    SectionTitle,
  },
})
export default class Projects extends Vue {
  isActive: boolean = false;
  imgList: string[] = [
    require("@/assets/img/home/1-min.jpg"),
    require("@/assets/img/home/2-min.jpg"),
    require("@/assets/img/home/3-min.jpg"),
    require("@/assets/img/home/4-min.jpg"),
    require("@/assets/img/home/5-min.jpg"),
    require("@/assets/img/home/6-min.jpg"),
  ];
}
</script>
<style lang="scss">
#projects {
  width: 90%;
  margin: 0 auto 120px auto;
  @media (min-width: 600px) {
    margin-bottom: 140px !important;
    img {
      width: 45%;
      max-width: 420px;
    }
  }
}
</style>
