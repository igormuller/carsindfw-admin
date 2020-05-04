<template>
  <v-app-bar app color="primary">
    <v-app-bar-nav-icon @click.stop="changeDrawer()" />
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "MenuTop",
  data: () => ({
    drawer: true
  }),
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
      this.$emit("drawerChange", this.drawer);
    }
  }
};
</script>
