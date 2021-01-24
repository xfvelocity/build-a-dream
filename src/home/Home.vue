<template>
  <div>
    <Header></Header>
    <Services></Services>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "./header/Header.vue";
import Services from "./services/Services.vue";

@Component({
  components: {
    Header,
    Services,
  },
})
export default class Home extends Vue {}
</script>
