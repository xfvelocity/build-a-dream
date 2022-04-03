<template>
  <div id="about">
    <div class="content mb-6">
      <h2>About</h2>
      <p class="my-0">
        We're dedicated to providing you with the best garden in your
        neighbourhood with an emphasis on perfection, high standards and
        trustworthy service. Accomplished garden design and guidance given to
        make your outside space an asset to your home. With over 25 years of
        experience, Build A-Dream has come a long way, providing services to a
        long list of regular clients.
      </p>
      <p class="my-0 mt-8">
        If you have any questions or would like a free quote, please don't
        hesitate to
        <NuxtLink
          class="internal-link text-decoration-underline text-white"
          to="/contact"
        >
          contact us
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "About",
});
</script>

<style lang="scss" scoped>
#about {
  color: white;
  font-size: 18px;
  padding: 90px 0;
  display: flex;
  align-items: center;
  margin: 20px 0 80px 0;
  background: url("/img/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .content {
    margin: 0 auto;
    width: 90%;
    max-width: 950px;
  }

  p {
    font-size: 16px;
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    padding: 0;
    height: 400px;
  }
}
</style>
