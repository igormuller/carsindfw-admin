<template>
  <v-card class="py-5">
    <v-img
      src="@/assets/sem_fundo.png"
      max-height="500"
      style="opacity: 0.8"
      contain
    >
      <v-list-item
        v-for="(city, i) in cities"
        :key="i"
        :to="city"
        class="ml-12"
      >
        <v-list-item-content>
          <v-list-item-title>{{ city }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cities: []
    };
  },
  created() {
    this.$http.get("/cities-dealers");
  }
};
</script>
