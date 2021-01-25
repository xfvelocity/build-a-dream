<template>
  <div id="reviews">
    <div class="max-width reviews-content">
      <SectionTitle
        title="Reviews"
        desc="Here's just a few of our happy customers and what they had to say about our services."
        :width="100"
        :underline="false"
      ></SectionTitle>
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
import SectionTitle from "@/shared/components/SectionTitle.vue";

@Component({
  components: {
    SectionTitle,
  },
})
export default class Reviews extends Vue {
  reviewsList: any[] = [
    {
      name: "Keith Duke",
      review:
        '"Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent and I have no hesitation in recommending him to everyone."',
    },
    {
      name: "Michelle Rachael",
      review:
        '"Completed my decking, turfing and patio exactly as requested. Could not be happier. Hassle free and excellent quality end result. Would recommend 100%"',
    },
    {
      name: "Zara MacDougall",
      review:
        '"Experienced, professional and competitive, Dominic is reliable and very creative and can easily turn your dream garden into a reality!!"',
    },
  ];
}
</script>
<style lang="scss">
#reviews {
  background: radial-gradient(
    59.79% 583.66% at 31.65% 90.39%,
    #032400 0%,
    rgba(3, 36, 0, 0.9) 100%
  );
  color: white;
  padding: 30px 0 60px 0;
  margin: 40px 0;
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
    background: white;
    height: 220px;
    max-width: 350px;
    color: black;
    display: flex;
    flex-wrap: wrap;
    h4 {
      align-self: flex-end;
    }
  }
  @media (min-width: 768px) {
    margin: 60px 0 80px 0;
    padding-bottom: 100px;
    .review-box {
      width: 30%;
    }
  }
}
</style>
