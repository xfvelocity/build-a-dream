<template>
  <div class="services d-flex justify-center align-center flex-wrap max-width">
    <div class="text-center mb-8 services-info">
      <h2>Services</h2>
      <p class="services-desc mt-2 mx-auto">
        Here are just a small amount of landscaping services that we offer. If a
        service which you are looking for isn't listed here then get in touch
        and we will most likely be able to provide it for you.
      </p>
    </div>

    <div class="d-flex services-boxes">
      <div
        v-for="(services, i) in servicesInfo"
        :key="i"
        class="services-boxes-box px-6 py-8 text-center"
      >
        <img :src="`./img/${services.img}.svg`" :alt="services.title" />
        <h3 class="mt-2 mb-1">{{ services.title }}</h3>
        <p class="my-0">{{ services.desc }}</p>
      </div>
    </div>

    <v-btn class="mt-6 px-14" color="primary" @click="$router.push('ourwork')">
      Our Work
    </v-btn>
  </div>
</template>

<script lang="ts">
import { servicesInfoData } from "./data/servicesInfo";
import { ServicesInfo } from "./types/services.types";

export default defineComponent({
  name: "Services",
  setup() {
    // Methods
    const servicesInfo: ServicesInfo[] = servicesInfoData;

    return {
      servicesInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
.services {
  width: 90%;
  margin: 0 auto;
  padding: 80px 0;

  &-desc {
    max-width: 400px;

    p {
      font-size: 14px;
    }
  }

  &-boxes {
    flex-wrap: wrap;

    &-box {
      max-width: 400px;
      margin: 5px auto;
      box-shadow: -3px 4px 8px 4px rgba(17, 17, 17, 0.06);
      border-radius: 5px;
      border: 1px solid #e5e5e5;
    }
  }

  @media (min-width: 769px) {
    padding: 100px 0 120px 0;
    width: 100%;

    &-desc {
      max-width: 600px;
    }

    &-boxes {
      width: 90%;
      flex-wrap: nowrap;
      justify-content: center;

      &-box {
        margin: 0 5px;
      }
    }

    &-info {
      width: 90%;
    }
  }

  @media (min-width: 1100px) {
    padding: 100px 0;

    &-desc {
      max-width: 600px;
    }

    &-boxes {
      &-box {
        max-width: 283px;
      }
    }
  }
}
</style>
