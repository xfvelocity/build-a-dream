import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import "vue3-carousel/dist/carousel.css";

import { defineNuxtPlugin } from "#app";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/lib/components/index";
import * as directives from "vuetify/lib/directives/index";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#086500",
    secondary: "#2fa625",
    border: "#828282",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: "customTheme",
        themes: {
          customTheme,
        },
      },
    })
  );
});
