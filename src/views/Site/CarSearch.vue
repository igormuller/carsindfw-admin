<template>
  <div>
    <BannerTop :slides="slides"></BannerTop>
    <!-- <v-card class="mt-3">
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
    </v-card> -->
    <v-row>
      <v-col cols="12" md="3">
        <SearchCars
          @clickSearch="(page = 1), searchNow($event)"
          :searchStart="search"
        ></SearchCars>
      </v-col>
      <v-col cols="12" md="9">
        <loading :loading="loading" text="Loading search..."></loading>
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
import Loading from "../../components/Loading.vue";

export default {
  components: { BannerTop, SearchResult, SearchCars, Loading },
  data: () => ({
    slides: [
      {
        src: require("@/assets/site/banners/ad_01.png"),
        link: "/contact"
      },
      {
        src: require("@/assets/site/banners/sell_01.png"),
        link: "/register"
      },
      {
        src: require("@/assets/site/banners/carias_care_1.png"),
        link: "http://cariaslubeautocare.com"
      },
      {
        src: require("@/assets/site/banners/planet_dents_1.png"),
        link: "http://www.planetdents.com"
      }
    ],
    search: {
      type: "",
      make: "",
      model: "",
      category: "",
      year_start: "",
      year_end: ""
    },
    advertisements: {},
    loading: false,
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
      this.loading = true;
      this.$http
        .get(`/search`, {
          params: {
            dataSearch,
            order: this.order_by,
            paginate: this.paginate,
            page: this.page
          }
        })
        .then(res => {
          this.advertisements = res.data;
          this.loading = false;
        })
        .catch(() => (this.loading = false));
    }
  }
};
</script>
