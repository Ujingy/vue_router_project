<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Vue-Project</v-list-item-title>
          <v-list-item-subtitle> 님 환영합니다. </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="(item, key) in menuList" :key="key" :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.meta.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="primary lighten-1" padless>
      <!-- -->
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),

  computed: {
    ...mapGetters("page", ["menuList", "title"]),
  },
};
</script>
