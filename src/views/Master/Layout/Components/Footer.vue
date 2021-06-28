<template>
  <v-footer app inset padless>
    <v-card class="flex">
      <v-card-text class="py-5 text-right">
        All rights reserved &reg; {{ new Date().getFullYear() }} —
        <strong>CARSinDFW</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Fotter"
};
</script>
