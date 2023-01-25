<template>
  <header
    title="Build A-Dream"
    titleTwo="Landscape Gardening"
    subHeading="Dream gardens that don't cost the earth"
  />
  <services />

  <div class="about">
    <div class="about-content w-90-center mb-6">
      <h2 class="mb-4">About</h2>

      <p>
        We're dedicated to providing you with the best garden in your
        neighbourhood with an emphasis on perfection, high standards and
        trustworthy service. Accomplished garden design and guidance given to
        make your outside space an asset to your home. With over 25 years of
        experience, Build A-Dream has come a long way, providing services to a
        long list of regular clients.
      </p>

      <p class="mt-8">
        If you have any questions or would like a free quote, please don't
        hesitate to
        <nuxt-link
          class="internal-link text-decoration-underline text-white"
          to="/contact"
        >
          contact us
        </nuxt-link>
      </p>
    </div>
  </div>

  <div class="projects max-width">
    <section-title
      title="Our work"
      desc="Here are just a few examples of our work, if you wish to see more click"
      :link="{
        name: 'here',
        to: '/ourwork',
      }"
      :width="150"
    />

    <carousel
      ref="projectsCarousel"
      :items-to-show="isMobile ? 1 : 3"
      wrap-around
    >
      <slide v-for="(project, i) in projects" :key="i">
        <img
          :class="{ 'cursor-pointer': i === currentSlide }"
          :src="`img/${project.img}.jpg`"
          alt="Landscaping Project Example"
          @dragstart="() => false"
          @click="i === currentSlide ? openModal(project) : ''"
        />
      </slide>

      <template #addons>
        <pagination />
        <navigation />
      </template>
    </carousel>
  </div>

  <div>
    <project-modal v-model="isModalOpen" :item="selectedProject" />
  </div>

  <div class="reviews">
    <div class="w-90-center text-center max-width">
      <h2>Reviews</h2>
      <p class="text-16">Here's what some of our customers had to say</p>

      <div class="mt-10 w-90-center">
        <v-carousel :show-arrows="false" hide-delimiter-background>
          <v-carousel-item v-for="(review, i) in reviews" :key="i">
            <p class="mb-4 reviews-comment">
              {{ review.comment }}
            </p>

            <p class="fw-500">
              {{ review.name }}
            </p>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>

  <div class="contact">
    <section-title
      title="Contact Us"
      desc="Looking for a free quote or simply got a question to ask? Get in touch."
      :width="130"
    />
    <contact-form />
  </div>
</template>

<script lang="ts">
import { reviews, projects } from "@/content/index";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { isMobile } from "@/utility/width";
import { Project } from "@/types/app.types";

export default defineComponent({
  name: "Index",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    // Variables
    const isModalOpen = ref<boolean>(false);
    const selectedProject = ref<Project>();
    const projectsCarousel = ref();

    // Methods
    const openModal = (project: Project): void => {
      selectedProject.value = project;
      isModalOpen.value = true;
    };

    const currentSlide = computed<number>(
      () => projectsCarousel.value?.data?.currentSlide?.value
    );

    return {
      reviews,
      isModalOpen,
      isMobile,
      selectedProject,
      projects,
      projectsCarousel,
      currentSlide,
      openModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.contact {
  width: 90%;
  padding-top: 40px;
  padding-bottom: 160px;
  max-width: 500px;
  margin: 0 auto;
}

.about {
  color: white;
  font-size: 18px;
  padding: 90px 0;
  display: flex;
  align-items: center;
  margin: 20px 0 80px 0;
  background: url("/img/bg-min.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &-content {
    max-width: 950px;
  }

  p {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    padding: 0;
    height: 400px;
  }
}

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

  &-comment {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    height: 450px;

    .v-window {
      height: 230px !important;
    }
  }
}

.projects {
  width: 90%;
  margin: 0 auto 120px auto;

  @media (min-width: 600px) {
    margin-bottom: 140px !important;
  }

  .carousel {
    &__next,
    &__prev {
      background: #086500;
      border-radius: 50% !important;
      color: white;
    }

    &__pagination-item {
      button:after {
        border-radius: 50% !important;
        width: 10px;
        height: 10px;
      }
    }

    &__slide {
      img {
        width: 100%;
        border: 1px solid #828282;
      }

      @media (min-width: 769px) {
        opacity: 0.5;

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
}
</style>
