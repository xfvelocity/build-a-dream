<template>
  <div class="max-width" id="projects">
    <SectionTitle
      title="Projects"
      desc="Here is a just a few examples of our work, if you wish to see more navigate to the our work page."
      :width="100"
    />
    <div class="my-8 d-flex flex-wrap justify-center align-center">
      <img
        class="ma-1 my-2"
        style="border: 1px solid #a0a0a0"
        v-for="index in 6"
        :key="index"
        :src="`../../../assets/img/home/${index}-min.jpg`"
        alt="Landscaping Project Example"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../../shared/components/SectionTitle.vue";

export default defineComponent({
  name: "Projects",
  components: {
    SectionTitle,
  },
});
</script>

<style lang="scss" scoped>
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
