<template>
  <v-card color="#E5E5E5">
    <v-card-title style="color:#00205b">Chose Your Next Car</v-card-title>
    <v-card-text>
      <v-text-field
        label="Category"
        outlined
        dense
        required
        background-color="white"
      ></v-text-field>
      <v-autocomplete
        v-model="dataSearch.type"
        outlined
        dense
        :items="types"
        label="New/Used"
        clearable
        background-color="white"
      ></v-autocomplete>
      <v-autocomplete
        v-model="dataSearch.make"
        outlined
        dense
        :items="makes"
        item-text="name"
        item-value="id"
        label="Brand"
        @change="searchModelsByMake(dataSearch.make)"
        clearable
        background-color="white"
      ></v-autocomplete>
      <v-autocomplete
        v-model="dataSearch.model"
        outlined
        dense
        :items="models"
        item-text="name"
        item-value="id"
        label="Model"
        clearable
        background-color="white"
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Select a make first
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-autocomplete>
      <div class="d-flex">
        <v-text-field
          v-model="dataSearch.year_start"
          label="Year Start"
          outlined
          dense
          required
          background-color="white"
          class="mr-8"
        ></v-text-field>
        <v-text-field
          v-model="dataSearch.year_end"
          label="Year End"
          outlined
          dense
          required
          background-color="white"
        ></v-text-field>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { CAR_TYPE } from "@/constants/variables.js";

export default {
  name: "Search",
  props: ["searchStart"],
  data: () => ({
    types: CAR_TYPE,
    dataSearch: {
      type: null,
      make: null,
      model: null,
      year_start: null,
      year_end: null
    },
    makes: [],
    models: []
  }),
  methods: {
    searchModelsByMake(make) {
      let params = {
        make
      };
      this.$http
        .get("/model-by-make", { params })
        .then(res => (this.models = res.data));
      this.dataSearch.model = "";
    }
  },
  async created() {
    this.dataSearch.type = this.searchStart.type;
    this.dataSearch.make = this.searchStart.make;
    this.dataSearch.model = this.searchStart.model;
    await this.$http.get("/all-makes").then(res => (this.makes = res.data));
    if (this.searchStart.make !== "undefined") {
      let params = {
        make: this.searchStart.make
      };
      await this.$http
        .get("/model-by-make", { params })
        .then(res => (this.models = res.data));
    }
  }
};
</script>
