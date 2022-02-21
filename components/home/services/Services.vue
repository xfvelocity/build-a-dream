<template>
  <div
    class="d-flex justify-center align-center flex-wrap max-width"
    id="services"
  >
    <div v-if="windowWidth <= 1050" class="mb-8 services-info">
      <h3>Services</h3>
      <p class="mt-2">
        Here are just a small amount of landscaping services that we offer. If a
        service which you are looking for isn't listed here then get in touch
        and we will most likely be able to provide it for you.
      </p>

      <v-btn class="mt-4" color="primary" @click="$router.push('ourwork')">
        Our Work
      </v-btn>
    </div>

    <div
      v-for="(services, i) in servicesInfo"
      :key="i"
      class="services-box my-2 pa-4 py-8 text-center"
    >
      <img :src="services.img" :alt="services.title" />
      <h3 class="mb-3">{{ services.title }}</h3>
      <p class="my-0">{{ services.desc }}</p>
    </div>

    <div v-if="windowWidth > 1050" class="services-info ml-4">
      <h3>Services</h3>
      <p class="mt-2">
        Here are just a small amount of landscaping services that we offer. If a
        service which you are looking for isn't listed here then get in touch
        and we will most likely be able to provide it for you.
      </p>

      <v-btn color="primary" @click="$router.push('ourwork')">Our Work</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ServicesInfo, servicesInfoData } from "./data/servicesInfo";

export default defineComponent({
  name: "Services",
  props: {
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const servicesInfo: ServicesInfo[] = servicesInfoData;

    return {
      servicesInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
#services {
  width: 90%;
  margin: 0 auto;
  padding: 70px 0 90px 0;

  .services-box {
    box-shadow: -3px 4px 8px 4px rgba(17, 17, 17, 0.06);
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    max-width: 350px;
  }

  @media (min-width: 768px) {
    padding: 100px 0 120px 0;
    width: 100%;

    .services-box {
      width: 200px;
      margin: 0 5px;
      height: 290px;
    }

    .services-info {
      width: 80%;
    }
  }

  @media (min-width: 1100px) {
    padding: 100px 0;

    .services-box {
      width: 20%;
      height: 250px;
    }

    .services-info {
      width: 30%;
      max-width: 250px;
    }
  }
}
</style>
