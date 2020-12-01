<template>
  <v-card color="#E5E5E5">
    <v-card-title style="color:#00205b">Chose Your Next Car</v-card-title>
    <v-card-text>
      <v-select
        v-model="dataSearch.type"
        :items="types"
        label="New/Used"
        clearable
        outlined
        dense
        background-color="white"
      ></v-select>
      <v-autocomplete
        v-model="dataSearch.make"
        :items="makes"
        item-text="name"
        item-value="id"
        label="Make"
        @change="searchModelsByMake(dataSearch.make)"
        clearable
        outlined
        dense
        background-color="white"
      ></v-autocomplete>
      <v-autocomplete
        v-model="dataSearch.model"
        :items="models"
        item-text="name"
        item-value="id"
        label="Model"
        @change="searchCategoriesByModel(dataSearch.model)"
        clearable
        outlined
        dense
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
        item-text="body_type_front"
        item-value="body_type"
        label="Category"
        clearable
        outlined
        dense
        background-color="white"
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
          background-color="white"
        ></v-text-field>
        <div class="mx-4 my-2">
          <h3>to</h3>
        </div>
        <v-text-field
          v-model="dataSearch.year_end"
          label="Year End"
          outlined
          dense
          background-color="white"
        ></v-text-field>
      </div>
      <v-text-field
        v-model="dataSearch.value"
        label="Value Max"
        v-mask="currencyMask"
        prefix="$"
        outlined
        dense
        background-color="white"
      ></v-text-field>
      <v-select
        v-model="dataSearch.fuel_type"
        :items="fuel_types"
        label="Fuel Type"
        clearable
        outlined
        dense
        background-color="white"
      ></v-select>
      <v-select
        v-model="dataSearch.transmission_type"
        :items="transmission_types"
        label="Gear Shift"
        clearable
        outlined
        dense
        background-color="white"
      ></v-select>
      <v-select
        v-model="dataSearch.drive_train"
        :items="drive_type"
        label="Drive Train"
        clearable
        outlined
        dense
        background-color="white"
      ></v-select>
      <v-text-field
        v-model="dataSearch.miles"
        label="Miles"
        type="number"
        v-mask="'#######'"
        outlined
        dense
        background-color="white"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="primary" @click="$emit('clickSearch', dataSearch)">
        Search
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  CAR_TYPE,
  FUEL_TYPE,
  TRANSMISSION_TYPE,
  DRIVE_TYPE
} from "@/constants/variables.js";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

export default {
  name: "Search",
  props: ["searchStart"],
  data: () => ({
    currencyMask: createNumberMask({
      prefix: false,
      allowDecimal: true,
      includeThousandsSeparator: true,
      integerLimit: 8
    }),
    types: CAR_TYPE,
    fuel_types: FUEL_TYPE,
    transmission_types: TRANSMISSION_TYPE,
    drive_type: DRIVE_TYPE,
    dataSearch: {
      type: null,
      make: null,
      model: null,
      category: null,
      year_start: null,
      year_end: null,
      value: null,
      fuel_type: null,
      transmission_type: null,
      drive_train: null,
      miles: null
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
