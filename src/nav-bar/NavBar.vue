<template>
  <v-card :height="80">
    <v-app-bar class="py-2 d-flex align-center" :height="80">
      <img src="@/assets/build-a-dream-logo.png" />
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>
