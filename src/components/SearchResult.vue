<template>
  <div>
    <div class="mt-3" style="color:#00205b">
      {{ advertisements.total }} cars finded!!!
    </div>
    <v-row>
      <v-col cols="12" md="4" class="mb-n5">
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
      <v-col cols="12" md="2" class="mb-n5">
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
    <hr />
    <v-row>
      <v-col
        v-for="advertisement in advertisements.data"
        :key="advertisement.id"
        xl="2"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <v-card
          max-width="374"
          height="100%"
          @click="carDetail(advertisement)"
          hover
        >
          <v-img
            max-height="170"
            contain
            :src="setPhoto(advertisement)"
          ></v-img>
          <v-card-title>{{ advertisement.trim }}</v-card-title>
          <v-card-text>
            <v-row class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div class="my-1 subtitle-1">
              <strong>$ {{ advertisement.value }}</strong>
            </div>
            <div>
              {{ advertisement.description }}
            </div>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn color="primary" text to="car-detail">
              Reserve
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-pagination
        @input="$emit('clickPage', page)"
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
    carDetail(advertisement) {
      this.$router.push(`/car-detail/${advertisement.id}`);
    },
    setPhoto(advertisement) {
      if (advertisement.photo) {
        return advertisement.photo;
      }
      return require("@/assets/site/default_car.jpg");
    }
  }
};
</script>
