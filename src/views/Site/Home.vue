<template>
  <div>
    <v-card class="mt-3">
      <v-img
        src="@/assets/site/gif_cars_in_dallas_at_night.gif"
        class="flex-container"
        max-height="550"
      >
        <div class="mx-8 mb-8 px-2 search">
          <v-row align="center" class="mt-2">
            <v-col cols="12" md="2" class="text-center" style="color: #00205b">
              <strong>Chose Your Next Car</strong>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="type"
                :items="car_type"
                label="Type"
                clearable
              ></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="make"
                :items="makes"
                item-text="name"
                item-value="id"
                label="Make"
                clearable
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="2">
              <v-autocomplete
                v-model="model"
                :items="models"
                item-text="name"
                item-value="id"
                label="Model"
                clearable
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
                item-text="body_type_front"
                item-value="body_type"
                label="Category"
                clearable
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
            <v-col md="2">
              <v-btn
                block
                color="#bf0d3e"
                class="white--text"
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
    <banner-top :slides="slides"></banner-top>
    <div class="mt-10 flex-container">
      <div class="title_cars">News</div>
    </div>
    <v-row>
      <v-col
        v-for="(newPost, key) in newPosts"
        :key="key"
        xl="2"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <v-card :to="newPost.link" width="500" class="pr-2">
          <v-img :src="newPost.src" contain height="200"></v-img>
          <v-card-text>
            <v-divider class="mb-2"></v-divider>
            <strong>{{ newPost.title }}</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mt-10"></v-divider>
    <div class="flex-container">
      <div class="title_cars">New Cars</div>
    </div>
    <v-row>
      <v-col
        v-for="car in cars"
        :key="car.id"
        xl="2"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <v-card :to="`car-detail/${car.id}`" width="500" class="pr-2">
          <v-img :src="car.photo" height="200"></v-img>
          <v-card-text>
            <v-divider class="mb-2"></v-divider>
            <p>{{ car.make_name }}, {{ car.model_name }}, {{ car.trim }}</p>
            <strong>FROM {{ car.company_data.name }}</strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CAR_TYPE } from "@/constants/variables.js";
import BannerTop from "../../components/BannerTop.vue";

export default {
  components: { BannerTop },
  data: () => ({
    type: "",
    make: "",
    model: "",
    category: "",
    car_type: CAR_TYPE,
    makes: [],
    models: [],
    categories: [],
    cars: [],
    slides: [
      {
        src: require("@/assets/site/banners/carias_care_1.png"),
        link: "http://cariaslubeautocare.com"
      },
      {
        src: require("@/assets/site/banners/planet_dents_1.png"),
        link: "http://www.planetdents.com"
      }
    ],
    newPosts: [
      {
        src:
          "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FirstPost/2021_bmw_x3_angularfront.jpeg",
        link: "/news/the-x3-taken-further",
        title: "THE X3 – TAKEN FURTHER"
      },
      {
        src:
          "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SecondPost/Kia_Seltos_Nightfall_Edition_02.jpg",
        link: "/news/2022-kia-seltos",
        title: "2022 Kia Seltos"
      },
      {
        src:
          "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/ThirdPost/Mercedes-Benz+GLA-Class.jpg",
        link: "/news/mercedes-benz-gla-suv",
        title: "2021 MERCEDES-BENZ GLA SUV"
      },
      {
        src:
          "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FourthPost/Lexus-IS-gallery-07.jpg",
        link: "/news/lexus-is-300-awd",
        title: "2021 Lexus IS 300 AWD"
      },
      {
        src:
          "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/FifthPost/2022-infiniti-qx60-apple-carplay.jpg",
        link: "/news/infiniti-qx60",
        title: "2022 INFINITI QX60"
      },
      {
        src:
          "https://carsindfwgallery.s3.us-east-2.amazonaws.com/news/SixthPost/2021-toyota-tundra-nightshade-003-1619206966.jpg",
        link: "/news/toyota-tundra",
        title: "2022 TOYOTA TUNDRA"
      }
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
    this.$http.get("/last-cars").then(res => (this.cars = res.data));
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
