<template>
  <v-row>
    <v-col cols="12" md="5">
      <Plan
        :plan="plan"
        :loadingPlan="loadingPlan"
        @loadingPlan="loadingCustomerDetail()"
      ></Plan>
      <PaymentMethods></PaymentMethods>
    </v-col>

    <v-col cols="12" md="7">
      <Payments :intents="intents" :loadingIntents="loadingIntents"></Payments>
    </v-col>
  </v-row>
</template>

<script>
import Plan from "./Plan";
import PaymentMethods from "./PaymentMethods";
import Payments from "./Payments";

export default {
  components: { Plan, PaymentMethods, Payments },
  data: () => ({
    plan: {},
    loadingPlan: true,
    intents: [],
    loadingIntents: true
  }),
  methods: {
    loadingCustomerDetail() {
      this.loadingPlan = true;
      this.$http.get(`/payment-customer-detail`).then(res => {
        this.plan = res.data;
        this.loadingPlan = false;
      });
      this.loadingPaymentIntents();
    },
    loadingPaymentIntents() {
      this.loadingIntents = true;
      this.$http.get(`/payment-intent-detail`).then(res => {
        this.intents = res.data;
        this.loadingIntents = false;
      });
    }
  },
  created() {
    this.$http.get(`/payment-customer-detail`).then(res => {
      this.plan = res.data;
      this.loadingPlan = false;
    });
    this.loadingPaymentIntents();
  }
};
</script>
