<template>
  <v-card>
    List Dealers
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dealers: []
    };
  },
  created() {
    this.$http.get("/dealers");
  }
};
</script>
