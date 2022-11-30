<template>
  <footer class="footer py-6">
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

      <v-spacer v-if="!isMobile" />

      <p class="my-0">
        &copy; {{ currentYear }} Build A-Dream Landscape Gardeners
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { isMobile } from "@/utility/width";

export default defineComponent({
  name: "Footer",
  setup() {
    const currentYear: number = new Date().getFullYear();

    return {
      currentYear,
      isMobile,
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
    flex-wrap: wrap;
    text-align: center;

    p {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    &-content {
      justify-content: space-between;

      p {
        width: auto;
      }
    }
  }
}
</style>
