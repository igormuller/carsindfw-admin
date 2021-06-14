<template>
  <v-card>
    <div class="d-flex flex-column align-center">
      <v-img
        src="@/assets/site/full_logo.png"
        max-width="350"
        class="mt-8"
      ></v-img>
      <div class="background-red my-5 px-8">
        <h1>BENEFITS</h1>
      </div>
    </div>
    <div class="d-flex align-center">
      <v-img
        class="mb-5"
        src="@/assets/site/benefits.png"
        max-height="1000"
        contain
      ></v-img>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.background-red {
  background-color: #c0323e;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.background-blue {
  background-color: #00205b;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
