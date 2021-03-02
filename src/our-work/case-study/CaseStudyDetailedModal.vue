<template>
  <v-dialog
    width="750"
    v-model="isModalOpen"
    @click:outside="toggleModal"
    id="case-study-modal"
  >
    <v-card class="pa-4">
      <h3 class="mb-4 text-center">{{ item.title }}</h3>
      <v-carousel
        height="auto"
        v-model="carousel"
        delimiter-icon="far fa-circle"
        style="width: 680px; margin: 0 auto;"
        :show-arrows="false"
      >
        <v-carousel-item v-for="(img, i) in item.detailedImgList" :key="i">
          <div class="carousel-item">
            <img
              style="width: 100%; transform: translateY(6px);"
              :src="img"
              :alt="item.title"
            />
          </div>
        </v-carousel-item>
      </v-carousel>
      <div class="d-flex mt-4">
        <v-spacer></v-spacer>
        <v-btn text color="red" @click="toggleModal">Close</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CaseStudy from "./CaseStudy.vue";

@Component
export default class CaseStudyDetailedModal extends Vue {
  @Prop()
  item!: CaseStudy;
  @Prop()
  isModalOpen!: boolean;

  carousel: number = 0;

  toggleModal(): void {
    this.$emit("toggle-modal");
  }
}
//
</script>
//
<style lang="scss">
// #case-study-modal {
//   .carousel {
//     height: 210px;
//   }
// }
//
</style>
