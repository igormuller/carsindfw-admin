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
    <Footer></Footer>
  </v-app>
</template>

<script>
import MenuLeft from "./components/layout/MenuLeft";
import MenuTop from "./components/layout/MenuTop";
import Footer from "./components/layout/Footer";

export default {
  name: "App",
  components: { MenuLeft, MenuTop, Footer },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    dark: false
  })
};
</script>
