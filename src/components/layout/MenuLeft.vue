<template>
  <v-navigation-drawer v-model="drawer" app floating color="primary">
    <v-list-item class="px-4">
      <v-list-item-avatar>
        <v-img src="@/assets/avatar-default.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{ this.$store.state.user.name }}</v-list-item-title>
    </v-list-item>
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
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MenuLaft",
  props: {
    drawer: Boolean
  }
};
</script>
