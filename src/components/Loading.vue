<template>
  <div class="text-center" v-if="loading">
    <v-progress-circular indeterminate :color="color"></v-progress-circular>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>
