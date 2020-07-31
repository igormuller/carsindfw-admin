<template>
  <div>
    <v-card>
      <v-carousel
        cycle
        height="150"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet color="indigo" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-row>
      <v-col cols="12" md="3" lg="2">
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
      <v-col cols="12" md="6" lg="8">
        <v-sheet class="mx-auto" elevation="5" max-width="1250">
          <v-slide-group v-model="model" class="px-5" show-arrows>
            <v-slide-item
              v-for="n in cards"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                :color="active ? 'primary' : 'default'"
                class="ma-2"
                height="100"
                width="100"
                @click="toggle"
              >
                <v-img
                  class="mt-2 ml-2"
                  height="85"
                  width="85"
                  :src="n.src"
                ></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
          <v-expand-transition>
            <v-sheet
              color="grey lighten-4"
              max-height="500"
              min-height="100"
              tile
            >
              <v-img
                max-height="500"
                min-height="100"
                contain
                :src="model === null ? cards[0].src : cards[model].src"
              ></v-img>
            </v-sheet>
          </v-expand-transition>
        </v-sheet>
        <v-card class="mt-3">
          <v-card-title color="#00205b">About this Car</v-card-title>
          <v-card-text>Teste</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" lg="2">
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
export default {
  data: () => ({
    model: null,
    index: null,
    slides: [
      "Welcome to CARSinDFW",
      "Advertisement 01",
      "Advertisement 02",
      "Advertisement 03",
      "Advertisement 04"
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

<style scoped>
.blueimp-gallery-controls {
  background-color: rgb(170, 170, 170);
}
</style>
