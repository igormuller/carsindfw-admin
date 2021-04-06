<template>
  <v-row>
    <v-col cols="12" md="5">
      <Plan></Plan>
      <PaymentMethods></PaymentMethods>
    </v-col>

    <v-col cols="12" md="7">
      <Payments></Payments>
    </v-col>
  </v-row>
</template>

<script>
import Plan from "./Plan";
import PaymentMethods from "./PaymentMethods";
import Payments from "./Payments";

export default {
  components: { Plan, PaymentMethods, Payments }
};
</script>
