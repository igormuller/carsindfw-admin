<template>
  <div>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-container>
            <div class="text-center">
              <h3>2009 BMW - PASSENGER CAR</h3>
            </div>
            <v-simple-table dense class="ma-5">
              <tbody>
                <tr>
                  <th>Manufacturer:</th>
                  <td>BMW AG</td>
                </tr>
                <tr>
                  <th>Vehicle Type:</th>
                  <td>PASSENGER CAR</td>
                </tr>
                <tr>
                  <th>Model Year:</th>
                  <td>2009</td>
                </tr>
                <tr>
                  <th>Make:</th>
                  <td>BMW</td>
                </tr>
                <tr>
                  <th>Model:</th>
                  <td>535i</td>
                </tr>
                <tr>
                  <th>Body Class:</th>
                  <td>Sedan/Saloon</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-container>
            <v-row>
              <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                <v-card flat tile class="d-flex">
                  <v-img
                    @click="index = 1"
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        >
                        </v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <gallery :images="images" :index="index" @close="index = null" :options="{closeOnSlideClick: true}"></gallery>
        <v-card>
          <v-card-title>
            Cars this Dealer
          </v-card-title>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="(card, index) in cards"
                :key="index"
                cols="12"
                sm="4"
                :md="card.flex"
              >
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    height="200px"
                  >
                    <v-card-title v-text="card.title"></v-card-title>
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
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
export default {
  components: {
    "gallery": VueGallery
  },
  data: () => ({
    index: null,
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
      }
    ],
    images: [
      "https://dummyimage.com/800/ffffff/000000",
      "https://dummyimage.com/1600/ffffff/000000",
      "https://dummyimage.com/1280/000000/ffffff",
      "https://dummyimage.com/400/000000/ffffff"
    ]
  })
};
</script>

<style scoped>
.blueimp-gallery-controls {
  background-color: rgb(170, 170, 170);
}
</style>
