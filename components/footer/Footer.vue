<template>
  <footer class="footer py-6">
    <div class="d-flex footer-content max-width">
      <v-spacer v-if="!isMobile" />

      <p>&copy; {{ currentYear }} Build A-Dream Landscape Gardeners</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { isMobile } from "@/utility/width";

export default defineComponent({
  name: "Footer",
  setup() {
    // Variables
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
