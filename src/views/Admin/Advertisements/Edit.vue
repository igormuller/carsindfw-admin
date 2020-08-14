<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-card class="elevation-5" flat :loading="loading">
        <v-card-title><h2>Edit Advertisement</h2></v-card-title>
        <v-divider></v-divider>
        <v-card-text v-if="!loading">
          {{ advertisement }}
          <form @keydown.enter="save()">
            <v-row>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="advertisement.type"
                  :items="car_type"
                  label="New/Used"
                  clearable
                  :error-messages="errors.type"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-autocomplete
                  v-model="advertisement.make_id"
                  :items="makes"
                  :loading="loadingMakes"
                  :search-input.sync="search"
                  item-text="name"
                  item-value="id"
                  label="Brand"
                  clearable
                  :error-messages="errors.make_id"
                  @change="searchModelsByMake(advertisement.make_id)"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="4">
                <v-autocomplete
                  v-model="advertisement.model_id"
                  :items="models"
                  item-text="name"
                  item-value="id"
                  label="Model"
                  clearable
                  :error-messages="errors.model_id"
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
            </v-row>
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="advertisement.year"
                  label="Year"
                  required
                  type="number"
                  :error-messages="errors.year"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="advertisement.miles"
                  label="Miles"
                  required
                  type="number"
                  :error-messages="errors.miles"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="advertisement.vin_number"
                  label="VIN Number"
                  required
                  :error-messages="errors.vin_number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.engine"
                  label="Engine"
                  required
                  :error-messages="errors.engine"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-select
                  v-model="advertisement.mpg_fuel_type"
                  :items="fuel_type"
                  label="MPG Fuel Type"
                  clearable
                  :error-messages="errors.mpg_fuel_type"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.seats"
                  label="Seats"
                  required
                  max="15"
                  min="2"
                  type="number"
                  :error-messages="errors.seats"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3">
                <v-text-field
                  v-model="advertisement.doors"
                  label="Doors"
                  required
                  max="15"
                  min="2"
                  type="number"
                  :error-messages="errors.doors"
                ></v-text-field>
              </v-col>
            </v-row>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-row class="text-right">
            <v-col>
              <v-btn color="primary" @click="save()" class="mr-3">save</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { CAR_TYPE, FUEL_TYPE } from "@/constants/variables.js";

export default {
  props: ["id"],
  data() {
    return {
      loading: true,
      loadingMakes: false,
      car_type: CAR_TYPE,
      fuel_type: FUEL_TYPE,
      makes: [],
      models: [],
      advertisement: {},
      errors: {},
      search: null
    };
  },
  methods: {
    save() {
      this.$http
        .put(`/advertisements/${this.id}`, this.advertisement)
        .then(() => this.$router.push("/admin/advertisements"))
        .catch(error => (this.errors = error.response.data.errors));
    },
    searchModelsByMake(make) {
      this.$http
        .get(`/model-by-make?make=${make}`)
        .then(res => (this.models = res.data));
      this.advertisement.model_id = null;
    }
  },
  watch: {
    async search(val) {
      this.loadingMakes = !this.loadingMakes;
      if (val.length >= 3) {
        await this.$http
          .get(`/search-makes?make=${val}`)
          .then(res => (this.makes = res.data));
      }
      this.loadingMakes = !this.loadingMakes;
    }
  },
  async created() {
    await this.$http
      .get(`/advertisements/${this.id}`)
      .then(res => (this.advertisement = res.data))
      .catch(() => this.$router.push("/404"));
    await this.$http
      .get(`/search-makes?make=${this.advertisement.make_id}`)
      .then(res => (this.makes = res.data));
    await this.$http
      .get(`/model-by-make?make=${this.advertisement.make_id}`)
      .then(res => (this.models = res.data));
    this.loading = !this.loading;
  }
};
</script>
