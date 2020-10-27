<template>
  <div>
    <v-row>
      <v-col v-for="(dealer, key) in dealers" :key="key" cols="6" sm="3" xl="2">
        <v-card :to="`/dealer/${dealer.id}`" class="pr-2 pb-1" width="200">
          <v-img :src="setLogoDealer(dealer)" contain height="150" width="200">
          </v-img>
          <div class="ma-2">
            <h3 style="color: #00205B;">{{ dealer.name }}</h3>
            <h5>St: {{ dealer.street }}, {{ dealer.number }}</h5>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["city_id"],
  data: () => ({
    dealers: {}
  }),
  methods: {
    setLogoDealer(dealer) {
      if (dealer.profile_path) {
        return dealer.profile_path;
      }
      return require("@/assets/site/dealer-logo-default.png");
    }
  },
  created() {
    this.$http
      .get(`/dealers-city/${this.city_id}`)
      .then(res => (this.dealers = res.data));
  }
};
</script>
