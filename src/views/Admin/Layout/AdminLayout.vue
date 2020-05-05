<template>
  <v-app id="inspire">
    <MenuLeft :drawer="drawer"></MenuLeft>
    <MenuTop @drawerChange="drawer = $event"></MenuTop>
    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MenuLeft from "./Components/MenuLeft";
import MenuTop from "./Components/MenuTop";

export default {
  name: "AdminLayout",
  components: { MenuLeft, MenuTop },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    dark: false
  })
};
</script>
