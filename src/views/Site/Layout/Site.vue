<template>
  <v-app id="inspire" style="background-color:#F2F2F2">
    <v-navigation-drawer v-model="drawer" app dark temporary>
      <v-list>
        <v-list-item v-for="(link, n) in links" :key="n" :to="link.link">
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <MenuTop @changeNavigation="drawer = $event"></MenuTop>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import MenuTop from "./Components/MenuTop";
import Footer from "./Components/Footer";
export default {
  components: { MenuTop, Footer },
  data: () => ({
    drawer: false,
    links: [
      { text: "Car for Sale", link: "/search" },
      { text: "Benefits", link: "/benefits" },
      { text: "Dealership", link: "/dealers" },
      { text: "Contact us", link: "/contact" },
      // { text: "News", link: "/news" }
      { text: "Sell Your Car", link: "/register" },
      { text: "Login", link: "/login" }
    ]
  })
};
</script>
