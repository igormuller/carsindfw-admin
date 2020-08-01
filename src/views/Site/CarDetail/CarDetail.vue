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
        <v-row>
          <v-col>
            <v-card>
              <div class="d-flex align-center justify-start">
                <v-img
                  class="ma-2 ml-2"
                  height="100"
                  width="100"
                  contain
                  src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                ></v-img>
                <v-btn text class="ml-n4">All cars</v-btn>
              </div>
              <div class="pl-2">
                <p class="my-n1">Endereço</p>
                <p class="my-n1">City</p>
                <p class="my-n1">Phone</p>
                <p class="my-n1">Contact</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="7" xl="7">
        <Galery :images="cards"></Galery>
        <v-card class="mt-3">
          <AboutCar></AboutCar>
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

export default {
  components: { Galery, BannerTop, AboutCar },
  data: () => ({
    model: null,
    index: null,
    slides: [
      { src: require("@/assets/car-wash.png") },
      { src: "https://cdn.vuetifyjs.com/images/cards/road.jpg" }
    ],
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 2
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 2
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 2
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 2
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 2
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 2
      },
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 2
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 2
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 2
      }
    ]
  })
};
</script>
