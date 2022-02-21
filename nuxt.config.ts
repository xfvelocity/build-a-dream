import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  target: "static",
  loading: { color: "#2FA625" },
  css: ["@/assets/css/main.scss", "@vuetify/nightly"],
  build: {
    transpile: ["@vuetify/nightly"],
  },
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
  },
});
