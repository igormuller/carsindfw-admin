<template>
  <v-navigation-drawer v-model="drawer" app floating class="menu-gradient-left">
    <v-list-item class="avatar">
      <v-list-item-avatar>
        <v-img src="@/assets/avatar-default.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{ this.$store.state.user.name }}</v-list-item-title>
    </v-list-item>
    <v-divider class="divider"></v-divider>
    <v-list dense>
      <router-link tag="div" to="/" exact>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
      <router-link tag="div" to="about">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mail_outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
    <template v-slot:append>
      <div class="pa-3">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MenuLeft",
  props: {
    drawer: Boolean
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
