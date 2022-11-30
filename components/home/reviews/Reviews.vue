<template>
  <div class="reviews">
    <div class="revies-content text-center max-width">
      <h2>Reviews</h2>
      <p class="text-16 my-0">Here's what some of our customers had to say</p>

      <div class="mt-10 reviews-section">
        <v-carousel :show-arrows="false" hide-delimiter-background>
          <v-carousel-item v-for="(review, i) in reviewsList" :key="i">
            <p class="my-0 mb-4 user-review">
              {{ review.comment }}
            </p>
            <p class="reviewers-name" style="font-weight: 500">
              {{ review.name }}
            </p>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <!-- <FuzzyImage
      img="/img/grass-background.png"
      min-img="/img/grass-background-min.png"
      background
    /> -->
  </div>
</template>

<script lang="ts">
import { reviewsListData } from "./data/reviews.data";
import { Review } from "./types/reviews.types";

// import FuzzyImage from "@/components/basic/fuzzy-image/FuzzyImage.vue";

export default defineComponent({
  name: "Reviews",
  setup() {
    const reviewsList: Review[] = reviewsListData;

    return {
      reviewsList,
    };
  },
});
</script>

<style lang="scss" scoped>
.reviews {
  margin-bottom: 60px;
  height: 500px;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px;

  background: url("/img/grass-background.png") no-repeat;
  background-size: cover;
  background-position: center;

  &-content {
    width: 90%;
    margin: 0 auto;
  }

  &-section {
    width: 90%;
    margin: 0 auto;

    .user-review {
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (min-width: 600px) {
    height: 450px;

    .v-window {
      height: 230px !important;
    }
  }
}
</style>
