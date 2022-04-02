<template>
  <v-navigation-drawer v-model="isOpen" class="pt-4" position="right" app>
    <template v-slot:prepend>
      <v-list class="pl-2">
        <v-list-item
          v-for="(link, i) in navLinks"
          :key="i"
          @click="goToLink(link.link)"
        >
          {{ link.name }}
        </v-list-item>
      </v-list>
    </template>

    <template v-slot:append>
      <div class="d-flex flex-wrap justify-center my-6" id="nav-bar-footer">
        <div class="mb-4">
          <v-icon
            v-for="(link, i) in socialLinks"
            :key="i"
            class="mx-1"
            aria-label="facebook"
            @click="goToSocialLink(link.link)"
          >
            {{ link.iconName }}
          </v-icon>
        </div>

        <p class="disclaimer-text">
          Created by
          <a href="https://www.alexlong.dev" target="_blank"> Alex </a>
        </p>

        <p class="disclaimer-text">&copy; 2022. Build A-Dream</p>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { NavLinks, SocialNavLinks } from "./data/nav.types";
import { navLinksData, socialLinksData } from "./data/navLinks";

export default defineComponent({
  name: "MobileNavBar",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const router = useRouter();
    const navLinks: NavLinks[] = navLinksData;
    const socialLinks: SocialNavLinks[] = socialLinksData;

    const isNavDrawerOpen = ref<boolean>(false);

    const goToSocialLink = (link: string): void => {
      window.open(link);
    };

    const goToLink = (link: string): void => {
      router.push(link);
      isNavDrawerOpen.value = false;
    };

    return {
      navLinks,
      socialLinks,
      isNavDrawerOpen,
      goToSocialLink,
      goToLink,
    };
  },
});
</script>

<style lang="scss" scoped>
#nav-bar-footer {
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
}
</style>
