<template>
  <v-navigation-drawer
    :model-value="modelValue"
    class="bd-nav-drawer pt-6 w-80"
    location="right"
    @update:model-value="closeModal"
  >
    <template v-slot:prepend>
      <v-list>
        <v-list-item
          v-for="(link, i) in routes"
          :key="i"
          class="justify-center text-20"
          :class="{ 'text-primary': link.active }"
        >
          <nuxt-link class="internal-link" :to="link.href" @click="closeModal">
            {{ link.name }}
          </nuxt-link>
        </v-list-item>
      </v-list>
    </template>

    <template v-slot:append>
      <div class="d-flex flex-wrap justify-center my-6">
        <a
          class="link mb-4 text-primary d-flex align-center"
          href="https://www.facebook.com/buildadreamlandscapers"
          target="_blank"
        >
          <v-icon color="primary" aria-label="facebook"> mdi-facebook </v-icon>
          <span class="ml-2 text-14">Find us on facebook</span>
        </a>

        <p class="bd-nav-drawer-disclaimer">
          &copy; {{ currentYear }} Build A-Dream Landscape Gardeners
        </p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Route } from "./types/nav.types";
import { navRoutes } from "./data/nav";

export default defineComponent({
  name: "BdNavDrawer",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    // Variables
    const route = useRoute();

    const currentYear: number = new Date().getFullYear();

    const routes = ref<Route[]>(navRoutes);

    // Methods
    const closeModal = (): void => {
      context.emit("update:modelValue", false);
    };

    // TODO: Refactor/Reuse this function
    const setActiveRoute = (path: string): void => {
      routes.value = JSON.parse(JSON.stringify([...navRoutes]));

      const matchingRoute: Route | undefined = routes.value.find(
        (link) => link.href === path
      );

      if (matchingRoute) {
        matchingRoute.active = true;
      }
    };

    // Watchers
    watch(route, () => setActiveRoute(route.path), { immediate: true });

    return {
      routes,
      currentYear,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.bd-nav-drawer {
  // TODO: Better solution
  a {
    text-decoration: none;
  }

  &-disclaimer {
    font-size: 12px;
    width: 100%;
    text-align: center;
    // TODO: Update this with colour variable
    color: #616161;
    margin: 0;

    a {
      color: #616161;
    }
  }
}
</style>
