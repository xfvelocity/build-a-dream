<template>
  <footer class="footer py-4">
    <div class="d-flex footer-content max-width">
      <p class="my-0">
        Site created by
        <a
          class="grey-text"
          href="https://alexlong.dev"
          target="_blank"
          rel="noreferrer"
        >
          Alex
        </a>
      </p>

      <v-spacer />

      <p class="my-0">
        &copy; {{ currentYear }} Build A-Dream Landscape Gardeners
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
export default defineComponent({
  name: "Footer",
  setup() {
    const currentYear: number = new Date().getFullYear();

    return {
      currentYear,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.03);
  border-top: 1px solid #e5e5e5;
  font-size: 14px;

  a {
    color: black;
  }

  &-content {
    width: 90%;
  }

  @media (min-width: 768px) {
    &-content {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
