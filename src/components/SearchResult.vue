<template>
  <div>
    <div class="mt-3" style="color:#00205b">
      {{ advertisements.total }} cars finded!!!
    </div>
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          dense
          v-model="order_by"
          :items="itemsOrderBy"
          label="Order By"
          @change="$emit('clickOrderBy', order_by), (page = 1)"
          outlined
          background-color="white"
        ></v-select>
      </v-col>
      <v-col cols="12" md="2">
        <v-select
          dense
          v-model="paginate"
          :items="[10, 15, 20, 25, 35, 50]"
          label="Cars/Page"
          @change="$emit('clickPaginate', paginate), (page = 1)"
          outlined
          background-color="white"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="my-1">
      <v-col
        v-for="advertisement in advertisements.data"
        :key="advertisement.id"
        cols="12"
        class="my-2"
      >
        <v-card width="100%" max-width="1000">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6">
              <v-carousel height="300" hide-delimiters show-arrows-on-hover>
                <v-carousel-item
                  v-for="image in advertisement.gallery_data"
                  :key="image.id"
                  class="mx-2"
                >
                  <v-img height="300" contain :src="image.url"></v-img>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="ml-3 d-flex justify-space-between">
                <div>
                  <h4>{{ advertisement.type_front }}</h4>
                  <h2 class="mt-n2">{{ advertisement.show_name }}</h2>
                  <h4 class="mt-n2">{{ advertisement.name_detail_front }}</h4>
                </div>
                <div class="mr-5 mt-n3 d-flex" style="color: #00205b">
                  <span class="mt-1">Miles: </span>
                  <h2>{{ advertisement.miles }}</h2>
                </div>
              </div>
              <!-- <v-btn
                class="mt-3"
                outlined
                rounded
                color="#00205b"
                width="180"
                small
              >
                Delivery Avaliable
              </v-btn> -->
              <div class="mt-5 d-flex justify-center">
                <v-card
                  class="pa-1 text-center"
                  color="#cccccc"
                  elevation="4"
                  width="300"
                >
                  <h1 style="color:#00205b">
                    {{ advertisement.value | currency }}
                  </h1>
                </v-card>
              </div>
              <div class="mt-5 ml-3">
                <h5>
                  {{ advertisement.company_data.address.city.name }} /
                  {{ advertisement.company_data.address.state.initials }}
                </h5>
                <div class="d-flex">
                  <h2>{{ advertisement.company_data.name }}</h2>
                  <!-- <div class="d-flex ml-3">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                    ></v-rating>
                    <span class="ml-2 mt-1 grey--text">4.5 (413)</span>
                  </div> -->
                </div>
              </div>
              <div class="mt-3 d-flex justify-center">
                <v-btn
                  color="#00205b"
                  class="white--text"
                  :to="`/car-detail/${advertisement.id}`"
                  width="250"
                >
                  Detail
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-2">
      <v-pagination
        @input="nextPage(page)"
        v-model="page"
        :length="advertisements.last_page"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
      ></v-pagination>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["advertisements"],
  data: () => ({
    order_by: "last_created_at",
    page: 1,
    paginate: 15,
    itemsOrderBy: [
      { value: "last_created_at", text: "Lasted" },
      { value: "max_value", text: "More Expensive" },
      { value: "min_value", text: "Cheaper" }
    ]
  }),
  methods: {
    setPhoto(advertisement) {
      if (advertisement.photo) {
        return advertisement.photo;
      }
      return require("@/assets/site/default_car.jpg");
    },
    nextPage(page) {
      window.scrollTo(0, 200);
      this.$emit("clickPage", page);
    }
  }
};
</script>
