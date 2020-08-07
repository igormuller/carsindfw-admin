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
              src="@/assets/test-logo.png"
            ></v-img>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
    <v-row>
      <v-col cols="3">
        <Search :dataSearch="dataSearch"></Search>
      </v-col>
      <v-col>
        <div class="mt-3" style="color:#00205b">
          25 cars finded!!!
        </div>
        <v-row>
          <v-col cols="4" class="mb-n5">
            <v-select
              dense
              :items="['New', 'Used']"
              label="Order By"
              clearable
              outlined
              background-color="white"
            ></v-select>
          </v-col>
        </v-row>
        <hr />
        <Result></Result>
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
    dataSearch: {}
  }),
  created() {
    this.dataSearch.type = this.$route.query.type;
    this.dataSearch.make = parseInt(this.$route.query.make);
    this.dataSearch.model = parseInt(this.$route.query.model);
    console.log(this.dataSearch);
  }
};
</script>
