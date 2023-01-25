// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Build A-Dream | Lincoln Landscape Gardeners",
      htmlAttrs: {
        lang: "en-GB",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Lincoln based landscapers with over 25 years experience. Profesional & affordable landscaping. Services include, fencing, patios, garden edging etc.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css",
        },
      ],
    },
  },
  css: ["vuetify"],
  build: {
    transpile: ["vuetify", "mixins"],
  },
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
  modules: ["@funken-studio/sitemap-nuxt-3", "@vueuse/nuxt"],
  sitemap: {
    hostname: "https://buildadream.co.uk",
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date().toISOString(),
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
