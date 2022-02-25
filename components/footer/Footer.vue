<template>
  <footer id="footer" class="py-6">
    <div class="footer-content max-width">
      <div class="d-flex" :class="windowWidth < 768 ? 'text-center' : ''">
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
        <p class="my-0 link">&copy; 2022 Build A-Dream</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
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
  font-size: 12px;

  a {
    color: black;
  }

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
