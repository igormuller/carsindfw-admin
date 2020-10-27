<template>
  <v-card>
    <v-card-title style="color: #00205b">{{ dealer.name }}</v-card-title>
    <v-card-text style="color: #00205b">
      <v-row>
        <v-col cols="12" sm="6">
          <h3>Street: {{ dealer.address.street }}</h3>
          <h3>City: {{ dealer.address.city.name }}</h3>
          <h3>Phone: {{ dealer.phone }}</h3>
          <v-spacer></v-spacer>
          maps
        </v-col>
        <v-col cols="12" sm="6">
          <v-expand-transition>
            <v-sheet color="grey lighten-4" max-height="500" min-height="100" tile>
              <v-img
                max-height="500"
                min-height="100"
                contain
                :src="selected === null ? images[0].url : images[selected].url"
              ></v-img>
            </v-sheet>
          </v-expand-transition>
          <v-slide-group v-model="selected" class="px-5" show-arrows>
            <v-slide-item
              v-for="(image, key) in images"
              :key="key"
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
                  :src="image.url"
                ></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["dealer_id"],
  data: () => ({
    dealer: null,
    selected: null,
    images: [
      {url: "https://picsum.photos/id/11/500/300"},
      {url: "https://picsum.photos/510/300?random"},
    ]
  }),
  created() {
    this.$http
      .get(`/dealer/${this.dealer_id}`)
      .then(res => (this.dealer = res.data));
  }
};
</script>
