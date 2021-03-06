export default {
  target: "static",
  head: {
    title: "Build A-Dream",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Build A-Dream, Lincoln landscapers with over 25 years experience. Professional and affordable offering services such as Fencing, Gardening, Driveways, Patios",
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
  loading: { color: "#2FA625" },
  css: ["@/assets/css/main.scss"],
  plugins: ["~/plugins/vee-validate.js", "~/plugins/axios.js"],
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
    scss: ["~/assets/css/*.scss"],
  },
  modules: [],
  transformIgnorePatterns: ["/node_modules/(?!vee-validate/dist/rules)"],
  transpile: ["vee-validate/dist/rules"],
  build: {
    extend(config, ctx) {},
  },
};
