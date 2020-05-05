<template>
  <v-app-bar app class="menu-gradient-top">
    <v-app-bar-nav-icon @click.stop="changeDrawer()" />
    <v-toolbar-title>CARSinDFW</v-toolbar-title>
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

<style lang="scss">
.menu-gradient-top {
  background-image: linear-gradient(to right, #1d2671, #c33764 200%);
}
.v-toolbar__content {
  .v-btn__content {
    color: white;
  }
  .v-toolbar__title {
    color: white;
  }
}
</style>
