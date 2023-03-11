// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
  },
  build: {
    transpile: ["mixins"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
