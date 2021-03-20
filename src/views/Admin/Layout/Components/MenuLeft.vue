<template>
  <v-navigation-drawer v-model="drawer" app floating class="menu-gradient-left">
    <v-list dense>
      <v-list-item link @click="openUserEdit()">
        <v-list-item-avatar class="ma-3">
          <v-img :src="setAvatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="mt-2">
          <strong>{{ this.$store.state.user.name }}</strong>
        </v-list-item-title>
      </v-list-item>
      <v-divider class="ml-5 mr-5"></v-divider>
      <router-link
        v-for="(item, key) in getMenu"
        :key="key"
        tag="div"
        :to="`/admin/${item.link}`"
        class="ml-5 mr-5 mt-2 mb-2"
      >
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
    <template v-slot:append>
      <div class="pa-3">
        <v-btn block @click="logout()">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { MENU } from "@/constants/menu.js";

export default {
  name: "MenuLeft",
  props: {
    drawer: Boolean
  },
  data: () => ({
    menu: MENU
  }),
  methods: {
    logout() {
      this.$store.user = {};
      localStorage.clear();
      this.$router.push("/");
    },
    openUserEdit() {
      let user = this.$store.state.user;
      this.$router.push(`/admin/users/${user.id}`);
    }
  },
  computed: {
    getMenu() {
      let user = this.$store.state.user;
      let menuFiltered = this.menu.filter(
        item => item.access === user.company.type || item.access === "all"
      );

      menuFiltered.map(
        item => (item.link = item.link.replace(/#id#/i, user.company_type.id))
      );
      return menuFiltered;
    },
    setAvatar() {
      let user = this.$store.state.user;
      return user.profile_url
        ? user.profile_url
        : require("@/assets/avatars/avatar-default.png");
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-gradient-left {
  background-image: linear-gradient(to bottom, #1d2671, #c33764 200%);
}

.router-link-active,
.router-link-exact-active {
  border-radius: 5px;
  background-color: #426eb9;
  cursor: pointer;
}

.v-navigation-drawer {
  .v-list-item .v-list-item__title {
    color: white !important;
  }
  .v-list-item .v-list-item__action i {
    color: white !important;
  }
}
</style>
