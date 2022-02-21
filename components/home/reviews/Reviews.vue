<!-- <template>
  <div id="reviews">
    <div class="content text-center max-width">
      <h2>Reviews</h2>
      <p style="font-size: 16px" class="my-0">
        Here's what some of our customers had to say
      </p>
      <div class="mt-10 review-section">
        <v-carousel
          v-model="carousel"
          delimiter-icon="fa-circle"
          hide-delimiter-background
          :show-arrows="false"
        >
          <v-carousel-item v-for="(review, i) in reviewsList" :key="i">
            <div class="carousel-item">
              <p class="my-0 mb-4 user-review">
                {{ review.review }}
              </p>
              <p class="reviewers-name" style="font-weight: 500">
                {{ review.name }}
              </p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Reviews",
  setup() {
    const carousel = ref<number>(1);
    const reviewsList: any[] = [
      {
        name: "Keith Duke",
        review:
          '"Dominic has done several pieces of work from laying a patio circle to a full brick driveway. The quality of work is excellent, I have no hesitation in recommending him."',
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

    return {
      carousel,
      reviewsList,
    };
  },
});
</script>

<style lang="scss" scoped>
#reviews {
  margin-bottom: 60px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../../../assets/img/grass-background.png");
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
    width: 85%;
    margin: 0 auto;
  }

  .v-window {
    height: 300px !important;
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
    height: 180px;
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
</style> -->
