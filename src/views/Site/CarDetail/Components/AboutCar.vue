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
  </div>
</template>

<script>
export default {
  name: "AboutCar",
  props: ["carDetail"],
  data: () => ({})
};
</script>
