<template>
  <div
    class="d-flex justify-center align-center flex-wrap max-width"
    id="services"
  >
    <div v-if="isMobile" class="mb-8 services-info">
      <h3>Services</h3>
      <p class="mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, et,
        illum ipsum officia nostrum eum tempora quasi iure ut hic alias deleniti
        consequuntur assumenda eos voluptatum autem.
      </p>
      <v-btn color="primary" class="white--text">Our Work</v-btn>
    </div>
    <div
      v-for="(services, i) in servicesInfo"
      :key="i"
      class="services-box my-2 pa-4 py-8 text-center"
    >
      <img :src="services.img" alt="" />
      <h2 class="mb-2">{{ services.title }}</h2>
      <p class="my-0">{{ services.desc }}</p>
    </div>
    <div v-if="!isMobile" class="services-info ml-4">
      <h3>Services</h3>
      <p class="mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, et,
        illum ipsum officia nostrum eum tempora quasi iure ut hic alias.
      </p>
      <v-btn color="primary" class="white--text">Our Work</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Services extends Vue {
  @Prop()
  isMobile!: boolean;

  servicesInfo: any[] = [
    {
      title: "Garden Care",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna eget.",
      img: require("@/assets/fence.svg"),
    },
    {
      title: "Driveways",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna eget.",
      img: require("@/assets/driveway.svg"),
    },
    {
      title: "Patios",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna eget.",
      img: require("@/assets/patio.svg"),
    },
  ];
}
</script>
<style lang="scss">
#services {
  width: 90%;
  margin: 0 auto;
  padding: 50px 0;

  .services-box {
    box-shadow: -3px 4px 8px 4px #000000 5%;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    max-width: 350px;
  }
  @media (min-width: 768px) {
    width: 100%;
    .services-box {
      width: 200px;
      margin: 0 5px;
    }
    .services-info {
      width: 80%;
    }
  }
  @media (min-width: 1000px) {
    padding: 100px 0;
    .services-box {
      width: 20%;
    }
    .services-info {
      width: 30%;
      max-width: 250px;
    }
  }
}
</style>
