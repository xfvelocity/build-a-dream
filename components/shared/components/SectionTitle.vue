<template>
  <div class="text-center mb-10" id="section-title">
    <h2
      :style="
        `width: ${width}px; ${
          underline ? 'border-bottom: 1px solid #086500;' : ''
        }`
      "
    >
      {{ title }}
    </h2>
    <p class="my-0">{{ desc }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SectionTitle extends Vue {
  @Prop()
  title!: string;
  @Prop()
  desc!: string;
  @Prop({ default: 150 })
  width!: string;
  @Prop({ default: true })
  underline!: boolean;
}
</script>
<style lang="scss">
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
