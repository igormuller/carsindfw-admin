<template>
  <v-row>
    <v-carousel
      cycle
      height="150"
      hide-delimiter-background
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
        :href="slide.link"
        target="_blank"
      >
        <v-img :src="slide.src" contain max-height="150"></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-row>
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
