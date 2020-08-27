<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Select Your Trim
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            More Details
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">
            Photos by Car
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import { CAR_TYPE, FUEL_TYPE } from "@/constants/variables.js";

export default {
  props: ["id"],
  data() {
    return {
      e1: 1,
      loading: false,
      loadingMakes: false,
      car_type: CAR_TYPE,
      fuel_type: FUEL_TYPE,
      makes: [],
      models: [],
      advertisement: {},
      errors: {},
      search: null
    };
  }
  // methods: {
  //   save() {
  //     this.$http
  //       .put(`/advertisements/${this.id}`, this.advertisement)
  //       .then(() => this.$router.push("/admin/advertisements"))
  //       .catch(error => (this.errors = error.response.data.errors));
  //   },
  //   searchModelsByMake(make) {
  //     this.$http
  //       .get(`/model-by-make?make=${make}`)
  //       .then(res => (this.models = res.data));
  //     this.advertisement.model_id = null;
  //   }
  // },
  // watch: {
  //   async search(val) {
  //     this.loadingMakes = !this.loadingMakes;
  //     if (val.length >= 3) {
  //       await this.$http
  //         .get(`/search-makes?make=${val}`)
  //         .then(res => (this.makes = res.data));
  //     }
  //     this.loadingMakes = !this.loadingMakes;
  //   }
  // },
  // async created() {
  //   await this.$http
  //     .get(`/advertisements/${this.id}`)
  //     .then(res => (this.advertisement = res.data))
  //     .catch(() => this.$router.push("/404"));
  //   await this.$http
  //     .get(`/search-makes?make=${this.advertisement.make_id}`)
  //     .then(res => (this.makes = res.data));
  //   await this.$http
  //     .get(`/model-by-make?make=${this.advertisement.make_id}`)
  //     .then(res => (this.models = res.data));
  //   this.loading = !this.loading;
  // }
};
</script>
