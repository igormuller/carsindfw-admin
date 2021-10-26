<template>
  <v-overlay :value="loading">
    <div class="d-flex flex-column align-center">
      <div>
        <v-progress-circular
          :color="color"
          indeterminate
          size="80"
          width="7"
        ></v-progress-circular>
      </div>
      <div class="mt-5 font-weight-bold" style="color:#00205b">
        {{text}}
      </div>
    </div>
  </v-overlay>
  <!-- <div class="text-center" v-if="loading">
    <v-progress-circular indeterminate :color="color"></v-progress-circular>
  </div> -->
</template>

<script>
export default {
  props: {
    loading: Boolean,
    text: {
      type: String,
      default: "Loading..."
    },
    color: {
      type: String,
      default: "#00205b"
    }
  }
};
</script>
