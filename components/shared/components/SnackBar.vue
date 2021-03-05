<template>
  <v-snackbar v-model="isSnackBarOpen">
    Open
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {
  @Prop()
  isSnackBarOpen!: boolean;
}
</script>
