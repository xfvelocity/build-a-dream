<template>
  <bd-header title="Our Work" height="40vh" />

  <div class="our-work max-width my-6 d-flex justify-center flex-wrap">
    <div
      class="our-work-project my-4 cursor-pointer pa-4"
      v-for="(project, i) in projectsList"
      :item="project"
      :key="`project-${i}`"
      @click="toggleModal(project)"
    >
      <img :src="`./img/${project.img}.jpg`" alt="" />

      <div class="mt-2">
        <p class="my-0 text-primary" style="font-size: 14px">
          {{ project.subheading }}
        </p>
        <h2>{{ project.title }}</h2>
        <p class="text-ellipsis">{{ project.desc }}</p>
      </div>
    </div>

    <bd-project-modal v-model="isModalOpen" :item="selectedProject" />
  </div>
</template>

<script lang="ts">
import { projects } from "@/content/ourwork";
import { Project } from "@/types/app.types";

export default defineComponent({
  name: "OurWork",
  head: {
    title: "Our Work | Build A-Dream | Lincoln Landscape Gardeners",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Take a look at our work which we've completed, landscaping services such as fencing, patio, decking, turfing etc.",
      },
    ],
  },
  setup() {
    // Variables
    const projectsList: Project[] = projects;

    const isModalOpen = ref<boolean>(false);
    const selectedProject = ref<Project>();

    // Methods
    const toggleModal = (caseStudy: Project): void => {
      selectedProject.value = caseStudy;
      isModalOpen.value = true;
    };

    return {
      projectsList,
      selectedProject,
      isModalOpen,
      toggleModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.our-work {
  padding-bottom: 60px;

  &-project {
    width: 90%;
    margin: 10px auto;
    max-width: 360px;

    img {
      width: 100%;
      border: 1px solid #e5e5e5;
    }

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.05);
    }

    @media (min-width: 768px) {
      width: 45%;
      max-width: 420px;
    }

    @media (min-width: 1150px) {
      width: 30%;
      max-width: none;
    }
  }
}
</style>
