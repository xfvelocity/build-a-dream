<template>
  <div id="reviews">
    <div class="max-width reviews-content">
      <div class="reviews-title text-center mb-10">
        <h2>Reviews</h2>
        <p class="my-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          consectetur aperiam nobis quis.
        </p>
      </div>
      <div class="d-flex justify-center align-center flex-wrap">
        <div
          v-for="(review, i) in reviewsList"
          :key="i"
          class="review-box ma-2 pa-8"
        >
          <p class="my-0">{{ review.review }}</p>
          <h4 class="mt-3">{{ review.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Reviews extends Vue {
  reviewsList: any[] = [
    {
      name: "Bob Jenson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus consectetur aperiam nobis quis",
    },
    {
      name: "Bob Jenson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus consectetur aperiam nobis quis",
    },
    {
      name: "Bob Jenson",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus consectetur aperiam nobis quis",
    },
  ];
}
</script>
<style lang="scss">
#reviews {
  padding: 30px 0 100px 0;
  .reviews-title {
    h2 {
      border-bottom: 1px solid #086500;
      width: 100px;
      margin: 10px auto;
    }
    p {
      width: 80%;
      margin: 0 auto;
      max-width: 400px;
    }
  }
  .reviews-content {
    width: 90%;
  }
  .review-box {
    box-shadow: -3px 4px 8px 4px rgba(17, 17, 17, 0.06);
    border-radius: 3px;
    border: 1px solid #e5e5e5;
    height: 220px;
    max-width: 350px;
    color: black;
    display: flex;
    flex-wrap: wrap;
    h4 {
        align-self: flex-end;
    }
  }
  @media(min-width: 768px) {
      .review-box {
          width: 30%;
      }
  }
}
</style>
