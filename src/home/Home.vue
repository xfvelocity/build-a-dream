<template>
  <Header></Header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "./header/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
