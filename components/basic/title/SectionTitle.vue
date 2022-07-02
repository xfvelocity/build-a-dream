<template>
  <div class="text-center mb-10" id="section-title">
    <h2
      :style="`width: ${width}px; ${
        underline ? 'border-bottom: 1px solid #086500;' : ''
      }`"
    >
      {{ title }}
    </h2>
    <p class="my-0">{{ desc }}</p>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 150,
    },
    underline: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
#section-title {
  h2 {
    margin: 10px auto;
  }

  p {
    width: 80%;
    margin: 0 auto;
    max-width: 400px;
  }
}
</style>
