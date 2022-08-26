<template>
  <div
    v-if="img"
    class="fuzzy-image"
    :class="{ 'fuzzy-image-background': background }"
    ref="imgContainer"
    :data-image-full="img"
  >
    <img ref="image" :src="minImg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";

export default defineComponent({
  name: "FuzzyImage",
  props: {
    img: {
      type: String,
      default: "",
      required: true,
    },
    minImg: {
      type: String,
      default: "",
      required: true,
    },
    background: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const imgContainer = ref<HTMLDivElement>();
    const image = ref<HTMLImageElement>();

    const minImgBackground = computed<string>(
      () => new URL(props.minImg, import.meta.url).href
    );

    const setNewImage = (imageUrl: string | null): void => {
      if (imgContainer.value && imageUrl) {
        imgContainer.value.style.backgroundImage = new URL(
          imageUrl,
          import.meta.url
        ).href;
        imgContainer.value.classList.add("fuzzy-image-loaded");
      }
    };

    const lazyLoad = (): void => {
      if (imgContainer.value) {
        const imageUrl: string | null =
          imgContainer.value.getAttribute("data-image-full");

        if (image.value) {
          image.value.src = imageUrl || "";

          image.value.addEventListener("load", () => setNewImage(imageUrl));
        }
      }
    };

    onMounted(lazyLoad);

    return {
      image,
      imgContainer,
      minImgBackground,
      lazyLoad,
      setNewImage,
    };
  },
});
</script>

<style lang="scss" scoped>
.fuzzy-image {
  background-size: cover;
  filter: blur(5px);
  background-image: v-bind(minImgBackground);

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-position: center;
  }

  & > img {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  &-loaded {
    filter: none;
    transition: filter 3s;
  }
}
</style>
