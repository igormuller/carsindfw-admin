<template>
  <div>
    <v-sheet class="mx-auto" elevation="5" max-width="800">
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
        <v-sheet v-if="model != null" color="grey lighten-4" height="500" tile>
          <v-img max-height="500" :src="cards[model].src"></v-img>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
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
