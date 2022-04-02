<template>
  <div id="reviews">
    <div class="content text-center max-width">
      <h2>Reviews</h2>
      <p style="font-size: 16px" class="my-0">
        Here's what some of our customers had to say
      </p>
      <div class="mt-10 review-section">
        <carousel wrap-around :autoplay="12000">
          <slide
            class="cursor-pointer"
            v-for="(review, i) in reviewsList"
            :key="i"
          >
            <div class="carousel-item">
              <p class="my-0 mb-4 user-review">
                {{ review.comment }}
              </p>
              <p class="reviewers-name" style="font-weight: 500">
                {{ review.name }}
              </p>
            </div>
          </slide>

          <template #addons>
            <pagination
              class="carousel-actions"
              style="--vc-pgn-background-color: #fff"
            />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { reviewsListData } from "./data/reviews.data";
import { Review } from "./types/reviews.types";

export default defineComponent({
  name: "Reviews",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const reviewsList: Review[] = reviewsListData;

    return {
      reviewsList,
    };
  },
});
</script>

<style lang="scss" scoped>
#reviews {
  margin-bottom: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../../../public/img/grass-background.png");
  background-position: center;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px;

  .content {
    width: 90%;
    margin: 0 auto;
  }

  .review-section {
    width: 90%;
    margin: 0 auto;
  }

  .user-review {
    max-width: 500px;
    margin: 0 auto;
  }

  .carousel-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    height: 220px;
    max-width: 500px;

    .reviews-name {
      align-self: flex-end;
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
