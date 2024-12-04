<template>
  <footer class="footer py-6 text-center">
    <p>&copy; {{ currentYear }} Build A-Dream Landscape Gardeners</p>
  </footer>
</template>

<script lang="ts" setup>
import { isMobile } from "@/utility/width";

// ** Data **
const currentYear: number = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer {
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.03);
  border-top: 1px solid #e5e5e5;
  font-size: 14px;
}
</style>
