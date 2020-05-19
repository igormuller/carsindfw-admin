<template>
  <v-app-bar app absolute height="110" color="#00205b">
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      color="white"
      @click.stop="changeNavigation()"
    />
    <v-container fluid>
      <v-row align="center">
        <v-col sm="10" md="4" align="start">
          <v-img
            :src="require('@/assets/full_logo.png')"
            contain
            max-width="350"
          />
        </v-col>
        <v-col sm="2" md="8" align="end">
          <v-btn
            v-for="(link, n) in links"
            :key="n"
            class="hidden-sm-and-down"
            text
            color="white"
            :to="link.link"
          >
            {{ link.text }}
          </v-btn>
          <v-btn
            class="white--text hidden-sm-and-down"
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
    }
  }
};
</script>
