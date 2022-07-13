<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "App",
  setup() {
    const nuxtApp = useNuxtApp();

    nuxtApp.hook("page:finish", () => {
      window.scrollTo(0, 0);
    });
  },
});
</script>
