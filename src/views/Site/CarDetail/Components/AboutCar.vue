<template>
  <div>
    <v-card class="mt-3">
      <v-card-title style="color:#00205b"><h2>About this Car</h2></v-card-title>
      <v-card-text>
        <strong>
          {{ carDetail.make_name }} - {{ carDetail.model_name }} -
          {{ carDetail.trim }}
        </strong>
        <v-row align="center">
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/engine.jpeg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.engine }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/fuel-type.jpeg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.fuel_type_front }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/transmission.jpeg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.transmission_front }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/seats.jpeg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.seats }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/color.jpeg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.color_ext }}</p>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-img
              src="@/assets/site/car-detail/drivetrain.jpeg"
              height="50"
              width="50"
            ></v-img>
            <p>{{ carDetail.drive_type }}</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card
      class="mt-3 pa-3 text-center"
      color="#acc0e3"
      style="color: #00205b;"
    >
      <h1>{{ carDetail.value }}</h1>
    </v-card>
    <v-card class="mt-3 pa-3 text-center">
      <v-card-title style="color:#00205b"><h3>Optionals</h3></v-card-title>
      <v-chip
        v-for="(feature, key) in carDetail.features"
        :key="key"
        class="ma-3 white--text"
        color="#00205b"
      >
        {{ feature }}
      </v-chip>
    </v-card>
    <v-card class="mt-3 pa-5 text-center">
      <v-btn
        :disabled="dialog"
        :loading="dialog"
        outlined
        rounded
        color="#00205b"
        @click="showVINHistory()"
      >
        <v-icon left>
          mdi-magnify
        </v-icon>
        VIN {{ carDetail.vin_number }}
      </v-btn>
    </v-card>
    <v-dialog v-model="dialog" scrollable width="700">
      <v-card :loading="loadingVIN">
        <v-simple-table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in dataVIN" :key="key">
              <td>{{ item.Variable }}</td>
              <td>{{ item.Value }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AboutCar",
  props: ["carDetail"],
  data: () => ({
    dialog: false,
    loadingVIN: false,
    dataVIN: []
  }),
  methods: {
    async showVINHistory() {
      this.dialog = true;
      this.loadingVIN = true;
      await this.$http
        .get(`check-vin/${this.carDetail.vin_number}`)
        .then(res => (this.dataVIN = res.data.Results));
      this.loadingVIN = false;
    }
  }
};
</script>
