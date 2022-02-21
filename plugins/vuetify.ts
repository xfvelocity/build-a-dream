import "@mdi/font/css/materialdesignicons.css";
import "@vuetify/nightly/lib/styles/main.sass";

import { defineNuxtPlugin } from "#app";
import { createVuetify, ThemeDefinition } from "@vuetify/nightly";
import * as components from "@vuetify/nightly/lib/components/index";
import * as directives from "@vuetify/nightly/lib/directives/index";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#086500",
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
