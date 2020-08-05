<template>
  <div>
    <v-card-title style="color:#00205b"><h2>About this Car</h2></v-card-title>
    <v-card-text>
      <v-row class="ml-5">
        <v-col>
          Engine
        </v-col>
        <v-col>
          MPG Fuel Type
        </v-col>
        <v-col>
          Transmission
        </v-col>
      </v-row>
      <v-row class="ml-5">
        <v-col>
          Seats
        </v-col>
        <v-col>
          Exterior Color
        </v-col>
        <v-col>
          Drivetrain
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "AboutCar",
  data: () => ({})
};
</script>
