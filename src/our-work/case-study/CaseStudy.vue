<template>
  <div id="case-study">
    <img :src="img" alt="" />
    <div class="mt-2">
      <p class="my-0" style="font-size: 14px;">{{ subheading }}</p>
      <h2 class="mb-2">{{ title }}</h2>
      <p class="my-0">{{ desc }}</p>
      <p style="cursor: pointer;" class="primary--text my-0 mt-4">Read More</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CaseStudy extends Vue {
  @Prop()
  img!: string;
  @Prop()
  subheading!: string;
  @Prop()
  title!: string;
  @Prop()
  desc!: string;
}
</script>
<style lang="scss">
#case-study {
  width: 80%;
  margin: 20px auto;
  img {
    width: 100%;
    border: 1px solid #e5e5e5;
  }
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1150px) {
    width: 30%;
    max-width: 450px;
  }
}
</style>
