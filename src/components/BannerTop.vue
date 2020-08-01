<template>
  <v-carousel cycle height="150" hide-delimiter-background :show-arrows="false">
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "BannerTop",
  props: {
    slides: Object,
    height: Number
  },
  data: () => ({})
};
</script>

<style></style>
