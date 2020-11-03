<template>
  <v-sheet class="mx-auto" elevation="5" max-width="1250" v-if="images.length > 0">
    <v-slide-group v-model="selected" class="px-5" show-arrows>
      <v-slide-item
        v-for="(image, key) in images"
        :key="key"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'default'"
          class="ma-2"
          height="100"
          width="100"
          @click="toggle"
        >
          <v-img
            class="mt-2 ml-2"
            height="85"
            width="85"
            :src="image.url"
          ></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <v-expand-transition>
      <v-sheet color="grey lighten-4" max-height="500" min-height="100" tile>
        <v-img
          max-height="500"
          min-height="100"
          contain
          :src="selected === null ? images[0].url : images[selected].url"
        ></v-img>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
export default {
  name: "Galery",
  props: {
    images: Array
  },
  data: () => ({
    selected: 0
  })
};
</script>
