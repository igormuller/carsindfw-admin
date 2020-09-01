<template>
  <div>
    <v-card>
      <BannerTop :slides="slides"></BannerTop>
    </v-card>
    <v-row>
      <v-col cols="12" md="3" xl="3">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            class="white--text align-end"
            height="200px"
            width="300px"
          >
            <v-card-title text="card.title">Teste</v-card-title>
          </v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mt-3">
          <v-card-text>
            <AboutDealer></AboutDealer>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7" xl="7">
        <Galery
          :images="advertisement.gallery"
          v-if="advertisement.gallery"
        ></Galery>
        <v-card class="mt-3">
          <AboutCar :carDetail="advertisement"></AboutCar>
        </v-card>
      </v-col>
      <v-col cols="12" md="2" xl="2">
        <v-card class="mb-3">
          <v-card-text>
            <p><v-icon class="mb-1" color="red">star_rate</v-icon> Save</p>
            <p><v-icon class="mb-1" color="red">list</v-icon> My List</p>
            <p><v-icon class="mb-1" color="red">mail_outline</v-icon> E-mail</p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title class="text--center">Make Your Offer</v-card-title>
          <v-card-text>
            <v-text-field label="Name" dense></v-text-field>
            <v-text-field label="Phone" dense></v-text-field>
            <v-text-field label="E-mail" dense></v-text-field>
            <v-checkbox dense label="Recived an e-mail copy"></v-checkbox>
            <v-textarea label="Proposal" rows="3" dense></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#00205b" class="white--text">Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop";
import Galery from "@/components/Galery";
import AboutCar from "./Components/AboutCar";
import AboutDealer from "./Components/AboutDealer";

export default {
  components: { Galery, BannerTop, AboutCar, AboutDealer },
  props: ["id"],
  data: () => ({
    advertisement: {},
    slides: [
      { src: require("@/assets/car-wash.png") },
      { src: "https://cdn.vuetifyjs.com/images/cards/road.jpg" }
    ]
  }),
  created() {
    this.$http
      .get(`/car-detail/${this.id}`)
      .then(res => (this.advertisement = res.data));
  }
};
</script>
