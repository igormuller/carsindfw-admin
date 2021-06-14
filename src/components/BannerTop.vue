<template>
  <v-carousel cycle height="150" hide-delimiter-background :show-arrows="false">
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
      :to="slide.link"
    >
      <v-img :src="slide.src" max-height="150"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "BannerTop",
  props: {
    slides: Array,
    height: Number
  },
  data: () => ({})
};
</script>

<style></style>
