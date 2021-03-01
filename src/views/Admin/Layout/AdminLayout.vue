<template>
  <v-app id="inspire">
    <MenuLeft :drawer="drawer"></MenuLeft>
    <MenuTop @drawerChange="drawer = $event"></MenuTop>
    <v-content>
      <v-container class="pa-5">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import MenuLeft from "./Components/MenuLeft";
import MenuTop from "./Components/MenuTop";
import Footer from "./Components/Footer";

export default {
  name: "AdminLayout",
  components: { MenuLeft, MenuTop, Footer },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    dark: false
  }),
  created() {
    if (localStorage.getItem("carsindfw_admin_logged")) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("carsindfw_admin_token");
    } else {
      this.$store.user = {};
      localStorage.clear();
      this.$router.push("/login");
    }

    this.$http
      .get("/users/info")
      .then(res => (this.$store.state.user = res.data))
      .catch(error => {
        this.$toasted.global.defaultError({
          msg: error.response.data.message
        });
        this.$router.push("/login");
      });
  }
};
</script>
