<template>
  <div>
    <v-row v-if="company.type === 'dealer'">
      <v-col cols="6">
        <v-img
          width="550"
          contain
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        ></v-img>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-btn text :to="`/dealer/${company.id}`">All cars</v-btn>
      </v-col>
    </v-row>
    <div>
      <h2>{{ company.name }}</h2>
      <span>Street: {{ company.address.street }}</span>
      <br />
      <span>
        City: {{ company.address.city.name }} -
        {{ company.address.state.initials }}
      </span>
      <br />
      <span>Phone: {{ company.phone }}</span>
      <br />
      <span>E-mail: {{ company.email }}</span>
      <br />
      <span>Site: {{ company.site }}</span>
      <br />
    </div>
    <v-row v-if="company.type === 'dealer'">
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
      </v-col>
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
      </v-col>
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
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
    <!-- <v-row v-if="company.type === 'dealer'">
      <v-col>
        <h2 style="color:#bf0d3e">Dealers Review</h2>
        <div class="mt-2">
          <v-rating :value="5" readonly color="#00205b" dense></v-rating>
          <v-rating :value="4" readonly color="#00205b" dense></v-rating>
          <v-rating :value="3" readonly color="#00205b" dense></v-rating>
          <v-rating :value="2" readonly color="#00205b" dense></v-rating>
          <v-rating :value="1" readonly color="#00205b" dense></v-rating>
        </div>
      </v-col>
    </v-row> -->
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
