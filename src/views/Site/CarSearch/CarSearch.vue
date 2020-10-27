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
              src="@/assets/site/test-logo.png"
            ></v-img>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
    <v-row>
      <v-col cols="12" md="3">
        <Search
          @clickSearch="searchNow($event, (page = 1))"
          :searchStart="search"
        ></Search>
      </v-col>
      <v-col>
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
              outlined
              background-color="white"
            ></v-select>
          </v-col>
        </v-row>
        <hr />
        <Result :advertisements="advertisements"></Result>
        <v-row class="text-center">
          <v-pagination
            v-model="page"
            :length="advertisements.last_page"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
          ></v-pagination>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop";
import Result from "./Components/Result";
import Search from "./Components/Search";

export default {
  components: { BannerTop, Result, Search },
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
    paginate: 15,
    itemsOrderBy: [
      { value: "last_created_at", text: "Lasted" },
      { value: "max_value", text: "More Expensive" },
      { value: "min_value", text: "Cheaper" }
    ]
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
      this.search = { ...dataSearch };
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
  },
  watch: {
    page() {
      this.searchNow(this.search);
    },
    order_by() {
      this.page = 1;
      this.searchNow(this.search);
    },
    paginate() {
      this.page = 1;
      this.searchNow(this.search);
    }
  }
};
</script>
