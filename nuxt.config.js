// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASIN_URL: process.env.BASIN_URL,
      FACEBOOK_URL: process.env.FACEBOOK_URL,
      EMAIL: process.env.EMAIL,
      PHONE: process.env.PHONE,
    },
  },

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
          api: "modern-compiler",
        },
      },
    },
  },

  modules: ["@nuxtjs/sitemap"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  compatibilityDate: "2024-11-27",
});