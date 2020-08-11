<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-card class="elevation-5" flat>
        <v-card-title><h2>Edit Advertisement</h2></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          {{ advertisement }}
          <form @keydown.enter="save()">
            <v-select
              v-model="advertisement.type"
              :items="type"
              label="New/Used"
              clearable
              :error-messages="errors.type"
            ></v-select>
            <v-autocomplete
              v-model="advertisement.make_id"
              :items="makes"
              item-text="name"
              item-value="id"
              label="Brand"
              clearable
              :error-messages="errors.make_id"
            ></v-autocomplete>
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
            <v-text-field
              v-model="advertisement.year"
              label="Year"
              required
              type="number"
              :error-messages="errors.year"
            ></v-text-field>
            <v-text-field
              v-model="advertisement.miles"
              label="Miles"
              required
              type="number"
              :error-messages="errors.miles"
            ></v-text-field>
            <v-text-field
              v-model="advertisement.vin_number"
              label="VIN Number"
              required
              :error-messages="errors.vin_number"
            ></v-text-field>
            <v-text-field
              v-model="advertisement.engine"
              label="Engine"
              required
              :error-messages="errors.engine"
            ></v-text-field>
            <v-select
              v-model="advertisement.mpg_fuel_type"
              :items="fuel_type"
              label="MPG Fuel Type"
              clearable
              :error-messages="errors.mpg_fuel_type"
            ></v-select>
            <v-text-field
              v-model="advertisement.seats"
              label="Seats"
              required
              max="15"
              min="2"
              type="number"
              :error-messages="errors.seats"
            ></v-text-field>
            <v-text-field
              v-model="advertisement.doors"
              label="Doors"
              required
              max="15"
              min="2"
              type="number"
              :error-messages="errors.doors"
            ></v-text-field>
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
      type: CAR_TYPE,
      fuel_type: FUEL_TYPE,
      makes: [],
      models: [],
      advertisement: {},
      errors: {}
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
      let params = {
        make
      };
      this.$http
        .get("/model-by-make", { params })
        .then(res => (this.models = res.data));
    }
  },
  async created() {
    await this.$http.get("/all-makes").then(res => (this.makes = res.data));
    await this.$http
      .get(`/advertisements/${this.id}`)
      .then(res => (this.advertisement = res.data))
      .catch(() => this.$router.push("/404"));
    this.searchModelsByMake(this.advertisement.make_id);
  }
};
</script>
