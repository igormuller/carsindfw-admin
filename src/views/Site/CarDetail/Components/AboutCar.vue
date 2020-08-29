<template>
  <div>
    <v-card-title style="color:#00205b"><h2>About this Car</h2></v-card-title>
    <v-card-text>
      <v-row class="ml-5">
        <v-col>
          <p><strong>Engine</strong></p>
          <p>{{ carDetail.engine }}</p>
        </v-col>
        <v-col>
          <p><strong>MPG Fuel Type</strong></p>
          <p>{{ carDetail.fuel_type_front }}</p>
        </v-col>
        <v-col>
          <p><strong>Transmission</strong></p>
          <p>{{ carDetail.transmission_front }}</p>
        </v-col>
      </v-row>
      <v-row class="ml-5">
        <v-col>
          <p><strong>Seats</strong></p>
          <p>{{ carDetail.seats }}</p>
        </v-col>
        <v-col>
          <p><strong>Exterior Color</strong></p>
          <p>{{ carDetail.color_ext }}</p>
        </v-col>
        <v-col>
          <p><strong>Drivetrain</strong></p>
          <p>{{ carDetail.drive_type }}</p>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "AboutCar",
  props: ["carDetail"],
  data: () => ({})
};
</script>
