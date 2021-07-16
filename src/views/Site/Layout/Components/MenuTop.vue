<template>
  <v-app-bar app absolute height="80" color="#00205b">
    <v-app-bar-nav-icon
      color="white"
      class="hidden-lg-and-up"
      @click.stop="changeNavigation()"
    />
    <v-img
      style="cursor:pointer"
      class="hidden-lg-and-up"
      src="@/assets/site/full_logo.png"
      max-width="250"
      @click="pageStart()"
    />
    <v-container fluid class="hidden-md-and-down">
      <v-row align="center">
        <v-col md="4" align="start">
          <v-img
            style="cursor:pointer"
            src="@/assets/site/full_logo.png"
            max-width="360"
            min-width="10"
            min-height="10"
            @click="pageStart()"
          />
        </v-col>
        <v-col md="8" align="end">
          <v-btn
            v-for="(link, n) in links"
            :key="n"
            text
            color="white"
            :to="link.link"
          >
            {{ link.text }}
          </v-btn>
          <v-btn
            class="white--text ml-2 mr-2"
            color="#BF0D3E"
            to="/admin"
            v-if="logged"
          >
            Admin
          </v-btn>
          <span v-else>
            <v-btn class="white--text ml-2 mr-2" color="#BF0D3E" to="/register">
              Sell Your Car
            </v-btn>
            <v-btn class="white--text" color="#BF0D3E" to="/login">
              Login
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    logged: localStorage.getItem("carsindfw_admin_logged"),
    links: [
      { text: "Car for Sale", link: "/search" },
      { text: "Benefits", link: "/benefits" },
      { text: "Dealership", link: "/dealers" },
      { text: "Contact us", link: "/contact" }
      // { text: "News", link: "/news" }
    ]
  }),
  methods: {
    changeNavigation() {
      this.$emit("changeNavigation", !this.drawer);
    },
    pageStart() {
      this.$router.push("/");
    }
  }
};
</script>
