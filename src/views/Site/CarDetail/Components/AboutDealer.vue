<template>
  <div>
    <!-- <div class="d-flex align-center">
      <v-img
        class="mr-3 mt-n2"
        height="150"
        width="150"
        contain
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      ></v-img>
      <v-btn text class="ml-n4">All cars</v-btn>
    </div> -->
    <v-row>
      <v-col cols="6">
        <v-img
        width="550"
        contain
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      ></v-img>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
          <v-btn text>All cars</v-btn>
      </v-col>
    </v-row>
    <div>
      <p class="my-n1">Endereço</p>
      <p class="my-n1">City</p>
      <p class="my-n1">Phone</p>
      <p class="my-n1">Contact</p>
    </div>
    <v-row>
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
      </v-col>
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
      </v-col>
      <v-col cols="4">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutDealer",
  data: () => ({})
};
</script>
