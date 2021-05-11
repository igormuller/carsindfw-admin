<template>
  <div>
    <v-row v-if="company.type === 'dealer'">
      <v-col cols="6">
        <v-img width="550" contain :src="setLogoDealer"></v-img>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-btn text :to="`/dealer/${company.id}`">All cars</v-btn>
      </v-col>
    </v-row>
    <div>
      <h1 class="mb-2">{{ company.name }}</h1>
      <div class="mb-2">
        <strong>
          {{ company.address.number }}, {{ company.address.street }},
          {{ company.address.city.name }}, {{ company.address.state.initials }}
        </strong>
      </div>
      <div class="mb-2"><strong>Phone:</strong> {{ company.phone }}</div>
      <div class="mb-2"><strong>E-mail:</strong> {{ company.email }}</div>
      <div class="mb-2" v-if="company.type === 'dealer'">
        <strong>Site:</strong> {{ company.site }}
      </div>
    </div>
    <v-row v-if="company.type === 'dealer'">
      <v-col cols="4" v-for="image in company.gallery" :key="image.id">
        <v-img :src="image.url"></v-img>
      </v-col>
    </v-row>
    <v-row v-if="company.type === 'dealer'">
      <v-col>
        <gmap-map
          :center="center"
          :zoom="zoom"
          :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          }"
          style="width:100%;  height: 200px;"
        >
        </gmap-map>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutDealer",
  props: ["company"],
  data: () => ({
    center: { lat: 31.9685988, lng: -99.9018131 },
    zoom: 6
  }),
  computed: {
    setLogoDealer() {
      if (this.company.profile_url) {
        return this.company.profile_url;
      }
      return require("@/assets/site/dealer-logo-default.png");
    }
  },
  created() {
    this.$http
      .get(`/lat-lng-maps?address_id=${this.company.address.id}`)
      .then(res => {
        this.center = res.data.center;
        this.zoom = res.data.zoom;
      });
  }
};
</script>
