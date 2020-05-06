<template>
  <v-footer app inset padless>
    <v-card class="flex" color="#1d2671" flat tile>
      <v-card-text class="py-2 white--text text-right">
        {{ new Date().getFullYear() }} — <strong>CARSinDFW</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Fotter"
};
</script>
