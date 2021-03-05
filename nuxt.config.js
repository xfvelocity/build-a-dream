export default {
  ssr: true,
  target: "server",
  /*
   ** Headers of the page
   */
  head: {
    title: "Build A-Dream",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Build A-Dream Lincoln Landscape Garderners with over 25 years experience.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vee-validate.js", "~/plugins/axios.js"],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
    [
      "@nuxtjs/vuetify",
      {
        icons: {
          iconfont: "fa",
        },
        theme: {
          themes: {
            light: {
              primary: "086500",
              "primary-lighter": "2FA625",
            },
          },
        },
      },
    ],
  ],
  styleResources: {
    scss: [
      "~/assets/vars/*.scss",
      "~/assets/abstracts/_mixins.scss", // use underscore "_" & also file extension ".scss"
    ],
  },
  modules: [],
  transformIgnorePatterns: ["/node_modules/(?!vee-validate/dist/rules)"],
  transpile: ["vee-validate/dist/rules"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
