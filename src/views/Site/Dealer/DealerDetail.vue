<template>
  <div>
    <v-card v-if="dealer">
      <v-card-title style="color: #00205b">
        <h1>{{ dealer.name }}</h1>
      </v-card-title>
      <v-card-text style="color: #00205b">
        <v-row>
          <v-col cols="12" md="6">
            <v-row>
              <v-col cols="12" md="6">
                <v-img :src="setLogoDealer(dealer)"></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <h2 class="mb-2">Street: {{ dealer.address.street }}</h2>
                <h2 class="mb-2">City: {{ dealer.address.city.name }}</h2>
                <h2 class="mb-2">Phone: {{ dealer.phone }}</h2>
                <h2 class="mb-2">E-mail: {{ dealer.email }}</h2>
                <h2 class="mb-2">
                  Site:
                  <a :href="`http://${dealer.site}`" target="_blank">
                    {{ dealer.site }}
                  </a>
                </h2>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" sm="12" v-if="images.length > 0">
            <GaleryInverter :images="images" />
          </v-col>
          <v-col md="6" sm="12">
            <v-card elevation="8">
              <gmap-map
                :center="center"
                :zoom="zoom"
                :options="{
                  zoomControl: false
                }"
                style="width:100%;  height: 550px;"
              >
              </gmap-map>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mt-4 px-3">
      <v-row>
        <v-col cols="12" sm="3">
          <SearchCars
            @clickSearch="(page = 1), searchNow($event)"
            :searchStart="search"
          ></SearchCars>
        </v-col>
        <v-col cols="12" sm="9">
          <SearchResult
            :advertisements="advertisements"
            @clickPage="(page = $event), searchNow(search)"
            @clickOrderBy="(order_by = $event), (page = 1), searchNow(search)"
            @clickPaginate="(paginate = $event), (page = 1), searchNow(search)"
          ></SearchResult>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import GaleryInverter from "@/components/GaleryInverter";
import SearchResult from "@/components/SearchResult";
import SearchCars from "@/components/SearchCars";

export default {
  components: { GaleryInverter, SearchResult, SearchCars },
  props: ["dealer_id"],
  data: () => ({
    dealer: null,
    selected: null,
    center: { lat: 31.9685988, lng: -99.9018131 },
    zoom: 6,
    advertisements: {},
    order_by: "last_created_at",
    page: 1,
    paginate: 15,
    search: {
      type: "",
      make: "",
      model: "",
      category: "",
      year_start: "",
      year_end: ""
    },
    images: []
  }),
  methods: {
    searchNow(dataSearch) {
      dataSearch.company_id = this.dealer.company_id;
      this.$http
        .get(`/search`, {
          params: {
            dataSearch,
            order: this.order_by,
            paginate: this.paginate,
            page: this.page
          }
        })
        .then(res => (this.advertisements = res.data));
    },
    setLogoDealer(dealer) {
      if (dealer.profile_url) {
        return dealer.profile_url;
      }
      return require("@/assets/site/dealer-logo-default.png");
    }
  },
  async created() {
    await this.$http.get(`/dealer/${this.dealer_id}`).then(res => {
      this.dealer = res.data;
      this.images = res.data.gallery;
    });
    await this.$http
      .get(`/lat-lng-maps?address_id=${this.dealer.address.id}`)
      .then(res => {
        this.center = res.data.center;
        this.zoom = res.data.zoom;
      });
    this.searchNow(this.search);
  }
};
</script>
