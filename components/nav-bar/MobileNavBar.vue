<template>
  <v-navigation-drawer
    :model-value="modelValue"
    class="pt-6 w-80"
    location="right"
    @update:model-value="closeModal"
  >
    <template v-slot:prepend>
      <v-list>
        <v-list-item
          class="justify-center text-20"
          :class="{ 'text-primary': link.active }"
          v-for="(link, i) in navLinks"
          :key="i"
          @click="goToLink(link.link)"
        >
          {{ link.name }}
        </v-list-item>
      </v-list>
    </template>

    <template v-slot:append>
      <div class="d-flex flex-wrap justify-center my-6">
        <!-- Add back in once facebook is re-created -->
        <!-- <div class="mb-4">
          <v-icon
            v-for="(link, i) in socialLinks"
            :key="i"
            class="mx-1"
            aria-label="facebook"
            @click="goToSocialLink(link.link)"
          >
            {{ link.iconName }}
          </v-icon>
        </div> -->

        <p class="disclaimer-text">
          Created by
          <a href="https://www.alexlong.dev" target="_blank"> Alex </a>
        </p>

        <p class="disclaimer-text">
          &copy; {{ currentYear }} Build A-Dream Landscape Gardeners
        </p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { NavLink, SocialNavLink } from "./types/nav.types";
import { navLinksData, socialLinksData } from "./data/navLinks";

export default defineComponent({
  name: "MobileNavBar",
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
    const router = useRouter();

    const socialLinks: SocialNavLink[] = socialLinksData;
    const currentYear: number = new Date().getFullYear();

    const navLinks = ref<NavLink[]>([]);

    // Methods
    const goToSocialLink = (link: string): void => {
      window.open(link);
      closeModal();
    };

    const goToLink = (link: string): void => {
      router.push(link);
      closeModal();
    };

    const closeModal = (): void => {
      context.emit("update:modelValue", false);
    };

    const setActiveRoute = (path: string): void => {
      navLinks.value = JSON.parse(JSON.stringify([...navLinksData]));

      const matchingNavLink: NavLink | undefined = navLinks.value.find(
        (link) => link.link === path
      );

      if (matchingNavLink) {
        matchingNavLink.active = true;
      }
    };

    // Watchers
    watch(route, () => setActiveRoute(route.path), { immediate: true });

    return {
      navLinks,
      socialLinks,
      currentYear,
      closeModal,
      goToSocialLink,
      goToLink,
    };
  },
});
</script>

<style lang="scss" scoped>
.disclaimer-text {
  font-size: 12px;
  width: 100%;
  text-align: center;
  color: #616161;
  margin: 0;

  a {
    color: #616161;
  }
}
</style>
