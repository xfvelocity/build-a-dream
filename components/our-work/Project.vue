<template>
  <div
    class="max-width my-10 d-flex justify-center flex-wrap"
    id="case-study-view"
  >
    <div
      class="case-study my-2 cursor-pointer pa-4"
      v-for="(project, i) in projectsList"
      :item="project"
      :key="`case-study-${i}`"
      @click="toggleModal(project)"
    >
      <img :src="`./img/${project.img}.jpg`" alt="Project IMG" />

      <div class="mt-2">
        <p class="my-0" style="font-size: 14px">
          {{ project.subheading }}
        </p>
        <h2>{{ project.title }}</h2>
      </div>
    </div>

    <project-modal v-model="isModalOpen" :item="selectedProject" />
  </div>
</template>

<script lang="ts">
import { projects } from "@/assets/data/project.data";
import { Project } from "@/assets/types/app.types";
import ProjectModal from "@/components/basic/project-modal/ProjectModal.vue";

export default defineComponent({
  name: "Project",
  components: {
    ProjectModal,
  },
  setup() {
    const projectsList: Project[] = projects;

    const isModalOpen = ref<boolean>(false);
    const selectedProject = ref<Project>();

    const toggleModal = (caseStudy: Project): void => {
      selectedProject.value = caseStudy;
      isModalOpen.value = true;
    };

    const preloadImages = (): void => {
      projectsList.forEach((item) =>
        item.detailedImgList.forEach(
          (url) => (new Image().src = `./img/${url}.jpg`)
        )
      );
    };

    onBeforeMount(preloadImages);

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
#case-study-view {
  padding-bottom: 60px;

  .case-study {
    width: 80%;
    margin: 10px auto;
    max-width: 360px;

    img {
      width: 100%;
      border: 1px solid #e5e5e5;
    }

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
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
