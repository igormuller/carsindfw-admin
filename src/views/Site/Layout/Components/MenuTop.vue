<template>
  <v-app-bar app absolute height="110" color="#00205b">
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      color="white"
      @click.stop="changeNavigation()"
    />
    <v-container fluid>
      <v-row align="center">
        <v-col md="4" align="start">
          <v-img
            style="cursor:pointer"
            :src="require('@/assets/full_logo.png')"
            contain
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
            class="hidden-md-and-down"
            text
            color="white"
            :to="link.link"
          >
            {{ link.text }}
          </v-btn>
          <v-btn
            class="white--text hidden-md-and-down ml-2 mr-2"
            color="#BF0D3E"
            to="/register"
          >
            Register
          </v-btn>
          <v-btn
            class="white--text hidden-md-and-down"
            color="#BF0D3E"
            to="/admin"
          >
            Login
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { text: "Sell Your Car", link: "sell-your-car" },
      { text: "Dealers list", link: "dealers" },
      { text: "Contact us", link: "contact" },
      { text: "News", link: "news" }
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
