<template>
  <v-navigation-drawer v-model="drawer" app floating class="menu-gradient-left">
    <v-list-item>
      <v-list-item-avatar class="ml-5 mt-4">
        <v-img src="@/assets/avatar-default.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-title class="mt-2">
        {{ this.$store.state.user.name }}
      </v-list-item-title>
    </v-list-item>
    <v-divider class="ml-5 mr-5"></v-divider>
    <v-list dense>
      <router-link tag="div" to="/admin/dashboard" class="ml-5 mr-5 mt-2 mb-2">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link tag="div" to="/admin/users" class="ml-5 mr-5 mt-2 mb-2">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
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
export default {
  name: "MenuLeft",
  props: {
    drawer: Boolean
  },
  methods: {
    logout() {
      this.$store.user = {};
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
.avatar {
  margin: 5px 0px 5px 15px;
}
.divider {
  margin: 0px 15px 0px 15px;
}
.menu-gradient-left {
  background-image: linear-gradient(to bottom, #1d2671, #c33764 200%);
}
.router-link-active,
.router-link-exact-active {
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
