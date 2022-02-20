<template>
  <v-snackbar v-model="isSnackBarOpen"> Open </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Snackbar",
  props: {
    isSnackBarOpen: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
