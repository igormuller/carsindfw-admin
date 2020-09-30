<template>
  <div>
    <v-row>
      <v-col
        v-for="advertisement in advertisements.data"
        :key="advertisement.id"
        xl="2"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <v-card
          max-width="374"
          height="400"
          @click="carDetail(advertisement)"
          hover
        >
          <v-img
            max-height="170"
            contain
            :src="advertisement.photo"
          ></v-img>
          <v-card-title>{{ advertisement.trim }}</v-card-title>
          <v-card-text>
            <v-row class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div class="my-1 subtitle-1">
              <strong>$ {{ advertisement.value }}</strong>
            </div>
            <div>
              {{ advertisement.description }}
            </div>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn color="primary" text to="car-detail">
              Reserve
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["advertisements"],
  methods: {
    carDetail(advertisement) {
      this.$router.push(`/car-detail/${advertisement.id}`);
    }
  }
};
</script>
