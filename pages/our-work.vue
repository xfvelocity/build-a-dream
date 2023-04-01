<template>
  <div class="bd-work">
    <div
      v-for="(w, i) in work.list"
      :key="i"
      class="bd-work-item xf-p-4"
      :class="{ 'bd-work-item-featured xf-py-8 xf-mb-4': i === 0 }"
    >
      <div>
        <img
          class="xf-w-100 xf-border-colour-grey-lighten-2"
          :src="getDynamicAsset(w.images[0])"
          alt=""
        />

        <div class="xf-mt-1" :class="{ 'bd-work-item-featured-text': i === 0 }">
          <p class="xf-text-10">{{ w.location }}</p>
          <h3 :class="{ 'xf-text-colour-green-darken-4': i !== 0 }">
            {{ w.title }}
          </h3>

          <p class="xf-my-2">{{ w.desc }}</p>
          <p
            class="bd-work-item-learn-more"
            :class="{ 'xf-text-colour-green-darken-4': i !== 0 }"
            @click="learnMore"
          >
            Learn more
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import work from "@/content/work.json";

// ** Methods **
const learnMore = (): void => {
  console.log("learn more");
};
</script>

<style lang="scss" scoped>
.bd-work {
  &-item {
    &-featured {
      background: linear-gradient(
        120.64deg,
        rgba(8, 98, 0, 0.9) 16.11%,
        #053f00 86.85%
      );
      color: white;
    }

    img {
      border: 1px solid;
      border-radius: 5px;
    }

    p {
      font-size: 12px;
    }

    &-learn-more {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
