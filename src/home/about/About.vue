<template>
  <div id="about">
    <div class="content mb-6">
      <h2 class="mb-2">About</h2>
      <p class="my-0">
        We're dedicated to providing you with the best garden in your
        neighbourhood with an emphasis on perfection, high standards and
        trustworthy service. Accomplished garden design and guidance given to
        make your outside space an asset to your home. With over 25 years of
        experience, Build A-Dream has come a long way, providing services to a
        long list of regular clients.
      </p>
      <p class="my-0 mt-8">
        If you have any questions or comments, please don't hesitate to
        <span class="text-decoration-underline link" @click="goToLink"
          >Contact Us</span
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  goToLink(): void {
    this.$router.push("/contact");
  }
}
</script>

<style lang="scss">
#about {
  color: white;
  font-size: 18px;
  padding: 70px 0;
  display: flex;
  align-items: center;
  margin: 20px 0 80px 0;
  background: url("../../assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .content {
    margin: 0 auto;
    width: 90%;
    max-width: 950px;
  }
  @media (min-width: 768px) {
    padding: 0;
    height: 400px;
  }
}
</style>
