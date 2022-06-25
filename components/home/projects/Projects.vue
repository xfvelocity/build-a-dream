<template>
  <div class="projects max-width">
    <SectionTitle
      title="Our work"
      desc="Here is a just a few examples of our work, if you wish to see more navigate to the our work page."
      :width="120"
    />
    <Carousel :items-to-show="isMobile ? 1 : 3" wrap-around>
      <Slide v-for="index in 6" :key="index">
        <img
          :src="`./img/home/${index}.jpg`"
          alt="Landscaping Project Example"
        />
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { isMobile } from "@/utility/width";
import SectionTitle from "../../shared/components/SectionTitle.vue";

export default defineComponent({
  name: "Projects",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SectionTitle,
  },
  setup() {
    return {
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects {
  width: 90%;
  margin: 0 auto 120px auto;

  @media (min-width: 600px) {
    margin-bottom: 140px !important;
  }

  .carousel {
    &__slide {
      opacity: 0.5;

      img {
        width: 100%;
      }

      &--visible {
        transform: scale(1);
        opacity: 0.5;
        transition: 0.5s;
      }

      &--active {
        transform: scale(1.1);
        opacity: 1;
        border: 1px solid black;
        z-index: 10;
      }
    }
  }
}
</style>
