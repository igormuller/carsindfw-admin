<template>
  <div>
    <v-card>
      <BannerTop :slides="slides"></BannerTop>
    </v-card>
    <v-card class="mt-3">
      <v-sheet>
        <v-slide-group show-arrows>
          <v-slide-item v-for="n in 18" :key="n">
            <v-img
              contain
              class="mx-2"
              height="100"
              width="100"
              src="@/assets/site/dealer-logo-default.png"
            ></v-img>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
    <v-row>
      <v-col cols="12" md="3">
        <SearchCars
          @clickSearch="(page = 1), searchNow($event)"
          :searchStart="search"
        ></SearchCars>
      </v-col>
      <v-col>
        <SearchResult
          :advertisements="advertisements"
          @clickPage="(page = $event), searchNow(search)"
          @clickOrderBy="(order_by = $event), (page = 1), searchNow(search)"
          @clickPaginate="(paginate = $event), (page = 1), searchNow(search)"
        ></SearchResult>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop";
import SearchResult from "@/components/SearchResult";
import SearchCars from "@/components/SearchCars";

export default {
  components: { BannerTop, SearchResult, SearchCars },
  data: () => ({
    slides: [{ src: "https://cdn.vuetifyjs.com/images/cards/road.jpg" }],
    search: {
      type: "",
      make: "",
      model: "",
      category: "",
      year_start: "",
      year_end: ""
    },
    advertisements: {},
    order_by: "last_created_at",
    page: 1,
    paginate: 15
  }),
  created() {
    this.search.type = this.$route.query.type;
    this.search.make = parseInt(this.$route.query.make);
    this.search.model = parseInt(this.$route.query.model);
    this.search.category = this.$route.query.category;
    this.searchNow(this.$route.query);
  },
  methods: {
    searchNow(dataSearch) {
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
    }
  }
};
</script>
