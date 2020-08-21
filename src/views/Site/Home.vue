<template>
  <div>
    <v-card class="mt-3">
      <v-img
        src="@/assets/gif_cars_in_dallas_at_night.gif"
        class="flex-container"
        max-height="500"
      >
        <div class="mx-8 mb-5 search">
          <v-row class="ml-5">
            <v-col cols="12" md="2" class="mt-6" style="color: #00205b">
              <strong>Chose Your Next Car</strong>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="type"
                :items="car_type"
                label="Type"
                :clearable="true"
              ></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="make"
                :items="makes"
                item-text="name"
                item-value="id"
                label="Brand"
                :clearable="true"
                required
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="model"
                :items="models"
                item-text="name"
                item-value="id"
                label="Model"
                :clearable="true"
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Select a make first
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="category"
                :items="categories"
                item-text="name"
                item-value="id"
                label="Category"
                :clearable="true"
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Select a model first
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col>
              <v-btn
                color="#bf0d3e"
                class="ml-4 mt-3 white--text"
                :to="
                  `search?type=${type}&make=${make}&model=${model}&category=${category}`
                "
              >
                Search
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-card>
    <br />
    <v-card>
      <v-carousel
        cycle
        height="200"
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
    <div class="mt-10 flex-container">
      <div class="title_cars">New Cars</div>
    </div>
    <v-row>
      <v-col v-for="n in 4" xl="2" lg="3" md="4" sm="6" xs="12" :key="n">
        <v-card to="car-detail" width="500" class="pr-2">
          <v-img
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2020/202003/20200317/bmw-535i-3.0-m-sport-24v-gasolina-4p-automatico-wmimagem19012339042.jpg?s=fill&w=1920&h=1440&q=75"
            height="200"
          >
          </v-img>
          <v-card-actions>
            Dealer
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CAR_TYPE } from "@/constants/variables.js";

export default {
  data: () => ({
    type: "",
    make: "",
    model: "",
    category: "",
    car_type: CAR_TYPE,
    makes: [],
    models: [],
    categories: [],
    slides: [
      "Welcome to CARSinDFW",
      "Advertisement 01",
      "Advertisement 02",
      "Advertisement 03",
      "Advertisement 04"
    ]
  }),
  watch: {
    make: function(val) {
      this.$http
        .get(`/model-by-make?make=${val}`)
        .then(res => (this.models = res.data));
      this.model = "";
    },
    model: function(val) {
      this.$http
        .get(`/category-by-model?model=${val}`)
        .then(res => (this.categories = res.data));
      this.category = "";
    }
  },
  created() {
    this.$http.get("/all-makes").then(res => (this.makes = res.data));
  }
};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.search {
  border-top-style: solid;
  border-top-width: 15px;
  border-top-color: #00205b;
  background-color: #f0eeee;
  opacity: 0.8;
}

.title_cars {
  color: #bf0d3e;
  font-family: Racing Sans One;
  font-style: normal;
  font-weight: normal;
  font-size: 75px;
  line-height: 94px;
}
</style>
