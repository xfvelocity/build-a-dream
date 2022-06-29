<template>
  <div class="projects max-width">
    <SectionTitle
      title="Our work"
      desc="Here are a few examples of our work, if you wish to see more click here"
      :width="150"
    />
    <Carousel :items-to-show="isMobile ? 1 : 3" wrap-around>
      <Slide v-for="project in homeProjects" :key="project">
        <img
          class="cursor-pointer"
          :src="`./img/${project.img}.jpg`"
          alt="Landscaping Project Example"
          @click="openModal(project)"
        />
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>

  <project-modal v-model="isModalOpen" :item="selectedProject" />
</template>

<script lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { isMobile } from "@/utility/width";
import { Project } from "@/assets/types/app.types";
import { homeProjects } from "@/assets/data/project.data";

import SectionTitle from "../../shared/components/SectionTitle.vue";
import ProjectModal from "@/components/basic/project-modal/ProjectModal.vue";

export default defineComponent({
  name: "Projects",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SectionTitle,
    ProjectModal,
  },
  setup() {
    const isModalOpen = ref<boolean>(false);
    const selectedProject = ref<Project>();

    const openModal = (project: Project): void => {
      selectedProject.value = project;
      isModalOpen.value = true;
    };

    return {
      isModalOpen,
      isMobile,
      selectedProject,
      homeProjects,
      openModal,
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
