<template>
  <div>
    <v-card>
      <v-card-title style="color: #00205b">{{ dealer.name }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h3>Street: {{ dealer.address.street }}</h3>
            <h3>City: {{ dealer.address.city.name }}</h3>
            <h3>Phone: {{ dealer.phone }}</h3>
            <v-spacer></v-spacer>
            <v-card elevation="8" class="mt-4">
              <gmap-map
                :center="center"
                :zoom="zoom"
                style="width:100%;  height: 350px;"
              >
              </gmap-map>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <GaleryInverter :images="images" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-4">
      search
    </v-card>
  </div>
</template>

<script>
import GaleryInverter from "@/components/GaleryInverter";

export default {
  components: { GaleryInverter },
  props: ["dealer_id"],
  data: () => ({
    dealer: null,
    selected: null,
    center: { lat: 31.9685988, lng: -99.9018131 },
    zoom: 6,
    images: [
      { url: "https://picsum.photos/id/11/500/300" },
      { url: "https://picsum.photos/510/300?random" }
    ]
  }),
  async created() {
    await this.$http
      .get(`/dealer/${this.dealer_id}`)
      .then(res => (this.dealer = res.data));
    await this.$http
      .get(`/lat-lng-maps?address_id=${this.dealer.address.id}`)
      .then(res => {
        this.center = res.data.center;
        this.zoom = res.data.zoom;
      });
  }
};
</script>
