<template>
  <v-card color="#E5E5E5">
    <v-card-title style="color:#00205b">Chose Your Next Car</v-card-title>
    <v-card-text>
      <v-select
        v-model="dataSearch.type"
        outlined
        dense
        :items="types"
        label="New/Used"
        clearable
        background-color="white"
      ></v-select>
      <v-autocomplete
        v-model="dataSearch.make"
        outlined
        dense
        :items="makes"
        item-text="name"
        item-value="id"
        label="All Brand"
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
        label="All Model"
        @change="searchCategoriesByModel(dataSearch.model)"
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
      <v-autocomplete
        v-model="dataSearch.category"
        :items="categories"
        item-text="name"
        item-value="id"
        label="All Category"
        outlined
        dense
        background-color="white"
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
    <v-card-actions>
      <v-btn block color='primary' @click="$emit('clickSearch', dataSearch)">Search</v-btn>
    </v-card-actions>
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
      category: null,
      year_start: null,
      year_end: null
    },
    makes: [],
    models: [],
    categories: []
  }),
  methods: {
    searchModelsByMake(make) {
      this.$http
        .get(`/model-by-make?make=${make}`)
        .then(res => (this.models = res.data));
      this.dataSearch.model = "";
      this.dataSearch.category = "";
    },
    searchCategoriesByModel(model) {
      this.$http
        .get(`/category-by-model?model=${model}`)
        .then(res => (this.categories = res.data));
      this.dataSearch.category = "";
    }
  },
  async created() {
    this.dataSearch.type = this.searchStart.type;
    this.dataSearch.make = this.searchStart.make;
    this.dataSearch.model = this.searchStart.model;
    this.dataSearch.category = this.searchStart.category;
    await this.$http.get("/all-makes").then(res => (this.makes = res.data));
    if (this.searchStart.make !== "undefined") {
      await this.$http
        .get(`/model-by-make?make=${this.searchStart.make}`)
        .then(res => (this.models = res.data));
    }
    if (this.searchStart.model !== "undefined") {
      await this.$http
        .get(`/category-by-model?model=${this.searchStart.model}`)
        .then(res => (this.categories = res.data));
    }
  }
};
</script>
