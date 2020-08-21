<template>
  <v-app-bar app class="menu-gradient-top">
    <v-app-bar-nav-icon @click.stop="changeDrawer()" />
    <v-toolbar-title @click="openSite()" style="cursor:pointer">
      {{
        this.$store.state.user.company.type === "dealer"
          ? this.$store.state.user.company.name
          : "CARSinDFW"
      }}
    </v-toolbar-title>
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
    },
    openSite() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-gradient-top {
  background-image: linear-gradient(to right, #1d2671, #c33764 200%);
}
.v-toolbar__content {
  .v-app-bar__nav-icon {
    color: white;
  }
  .v-toolbar__title {
    color: white;
  }
}
</style>
