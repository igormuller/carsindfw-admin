<template>
  <v-card class="mt-4 mx-auto">
    <v-card-header>Title</v-card-header>
    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">User Registrations</div>
      <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small>
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-card__title {
  top: -25px;
  margin: 15px;
  height: 75px;
  position: relative;
  background-color: #1d2671;
  color: #ddd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px !important;
}
</style>