<template>
  <div>
    <v-card :height="80">
      <v-app-bar class="py-2 d-flex align-center" :height="80" app>
        <v-app-bar-nav-icon @click="toggleNavDrawer" />
        <img src="@/assets/build-a-dream-logo.png" />
      </v-app-bar>
    </v-card>
    <v-navigation-drawer class="pt-8" v-model="isNavDrawerOpen" app>
      <template v-slot:prepend>
        <div class="d-flex justify-center">
          <img src="@/assets/build-a-dream-logo-text.png" alt="" />
        </div>
        <hr style="width: 80%" class="mx-auto mt-4">
        <v-list>
          <v-list-item @click="goToLink('/')">
            <v-list-item-content class="justify-center"
              >Home</v-list-item-content
            >
          </v-list-item>
          <v-list-item @click="goToLink('/our-work')"
            ><v-list-item-content class="justify-center"
              >Our Work</v-list-item-content
            ></v-list-item
          >
          <v-list-item @click="goToLink('/contact')"
            ><v-list-item-content class="justify-center"
              >Contact</v-list-item-content
            ></v-list-item
          >
        </v-list>
      </template>
      <template v-slot:append>
        <div class="d-flex flex-wrap justify-center my-4" id="nav-bar-footer">
          <div class="mb-4">
            <v-hover>
              <v-icon
                slot-scope="{ hover }"
                :color="hover ? 'primary' : ''"
                class="mx-1"
                @click="goToSocialLink('facebook')"
                >fab fa-facebook-square</v-icon
              >
            </v-hover>
            <v-hover>
              <v-icon
                slot-scope="{ hover }"
                :color="hover ? 'primary' : ''"
                class="mx-1"
                @click="goToSocialLink('instagram')"
                >fab fa-instagram</v-icon
              ></v-hover
            >
            <v-hover>
              <v-icon
                slot-scope="{ hover }"
                :color="hover ? 'primary' : ''"
                class="mx-1"
                @click="goToSocialLink('twitter')"
                >fab fa-twitter</v-icon
              ></v-hover
            >
          </div>
          <p class="disclaimer-text">
            Created by
            <a
              style="text-decoration: none"
              href="https://www.alex-long.co.uk"
              target="_blank"
              >Alex</a
            >
          </p>
          <p class="disclaimer-text">
            &copy; 2020. All rights reserved.
          </p>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MobileNavBar extends Vue {
  isNavDrawerOpen: boolean = false;

  toggleNavDrawer(): void {
    this.isNavDrawerOpen = !this.isNavDrawerOpen;
  }

  goToLink(link: string): void {
    this.$router.push(link);
  }

  goToSocialLink(link: string): void {
    switch (link) {
      case "facebook":
        window.open("https://www.facebook.com");
        break;
      case "instagram":
        window.open("https://www.instagram.com");
        break;
      case "twitter":
        window.open("https://www.twitter.com");
        break;
    }
  }
}
</script>
<style lang="scss">
#nav-bar-footer {
  .disclaimer-text {
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: #616161;
    margin: 0;
  }
}
</style>
