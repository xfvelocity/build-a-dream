<template>
  <footer id="footer" class="py-4">
    <div class="footer-content max-width">
      <div :class="windowWidth < 768 ? 'text-center' : ''">
        <p class="my-0">&copy; 2021 Build A-Dream. All Rights Reserved.</p>
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
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  props: {
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
#footer {
  box-shadow: 4px -5px 6px 0px #00000015;
  border-top: 1px solid #e5e5e5;

  .footer-content {
    width: 90%;
  }

  @media (min-width: 768px) {
    .footer-content {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
