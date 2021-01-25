<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div class="max-width my-12" id="projects">
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
  </v-lazy>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SectionTitle from "@/shared/components/SectionTitle.vue";

@Component({
  components: {
    SectionTitle,
  },
})
export default class Projects extends Vue {
  isActive: boolean = false;
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
  @media (min-width: 600px) {
    margin-bottom: 140px !important;
    img {
      width: 45%;
      max-width: 420px;
    }
  }
}
</style>
