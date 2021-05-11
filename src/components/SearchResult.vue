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
    <v-row v-for="advertisement in advertisements.data" :key="advertisement.id">
      <v-col class="d-flex justify-center">
        <v-card class="ma-2" width="100%" max-width="1000">
          <v-card class="d-flex">
            <v-row>
              <v-col>
                <v-carousel
                  cycle
                  height="300"
                  hide-delimiters
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="image in advertisement.gallery"
                    :key="image.id"
                  >
                    <v-img
                      height="300"
                      width="450"
                      class="ml-3"
                      :src="image.url"
                    ></v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col class="d-flex flex-column justify-center">
                <div>
                  <h5 class="font-weight-thin">{{ advertisement.type }}</h5>
                </div>
                <div>
                  <h3>{{ advertisement.show_name }}</h3>
                </div>
                <div>
                  <h5 class="font-weight-thin">{{ advertisement.trim }}</h5>
                </div>
                <div class="mt-5">
                  <h5>Miles {{ advertisement.miles }}</h5>
                </div>
                <div>{{ advertisement.value | currency }}</div>
                <div class="caption mt-3">
                  <v-row>
                    <v-col>
                      <span class="font-weight-bold">Ext. Color:</span>
                      {{ advertisement.color_ext }}
                    </v-col>
                    <v-col>
                      <span class="font-weight-bold">Transmission:</span>
                      {{ advertisement.transmission_front }}
                    </v-col>
                  </v-row>
                  <v-row class="mt-n5">
                    <v-col>
                      <span class="font-weight-bold">Int. Color:</span>
                      {{ advertisement.color_int }}
                    </v-col>
                    <v-col>
                      <span class="font-weight-bold">Drivetrain:</span>
                      {{ advertisement.drive_type }}
                    </v-col>
                  </v-row>
                </div>
                <v-btn
                  color="primary"
                  class="mr-3 mt-5"
                  @click="carDetail(advertisement)"
                >
                  Detail
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
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
