<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-card elevation="3" :loading="loadingPlan">
        <v-card-title>Plan</v-card-title>
        <v-card-text v-if="!loadingPlan">
          <v-row>
            <v-col cols="5">
              {{ plan.plan_type.description }}
            </v-col>
            <v-col cols="3">
              {{ plan.plan_type.active === 1 ? "Active" : "Canceled" }}
            </v-col>
            <v-col cols="4">
              {{ plan.last_plan.finished_date }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card elevation="3" class="mt-5" :loading="loadingMethods">
        <v-card-title>Payment Methods</v-card-title>
        <v-card-text>
          <v-row v-for="(method, key) in methods" :key="key">
            <v-col cols="3">
              {{ method.brand }}
            </v-col>
            <v-col cols="3">
              ****{{ method.last4 }}
            </v-col>
            <v-col cols="3">
              {{ method.expiration }}
            </v-col>
            <v-col cols="3">
              {{ method.default ? "Default" : "" }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-card elevation="3" :loading="loadingIntents">
        <v-card-title>Payments Intent</v-card-title>
        <v-card-text>
          <v-row v-for="(intent, key) in intents" :key="key">
            <v-col>{{ intent.amount_front }}</v-col>
            <v-col>{{ intent.created }}</v-col>
            <v-col>{{ intent.status }}</v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card elevation="3" :loading="loadingInvoices" class="mt-5">
        <v-card-title>Payments Invoice</v-card-title>
        <v-card-text>
          <v-row v-for="(invoice, key) in invoices" :key="key">
            <v-col>{{ invoice.amount_paid_front }}</v-col>
            <v-col>{{ invoice.created }}</v-col>
            <v-col>{{ invoice.number }}</v-col>
            <v-col>{{ invoice.status }}</v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    plan: {},
    intents: [],
    methods: [],
    invoices: [],
    // subscription: [],
    loadingPlan: true,
    loadingMethods: true,
    loadingIntents: true,
    loadingInvoices: true
    // loadingSubscription: true
  }),
  created() {
    this.$http.get(`/payment-customer-detail`).then(res => {
      this.plan = res.data;
      this.loadingPlan = false;
    });
    this.$http.get(`/payment-method-detail`).then(res => {
      this.methods = res.data;
      this.loadingMethods = false;
    });
    this.$http.get(`/payment-intent-detail`).then(res => {
      this.intents = res.data;
      this.loadingIntents = false;
    });
    this.$http.get(`/payment-invoice-detail`).then(res => {
      this.invoices = res.data;
      this.loadingInvoices = false;
    });
    // this.$http.get(`/payment-subscription-detail`).then(res => {
    //   this.subscriptions = res.data;
    //   this.loadingSubscription = false;
    // });
  }
};
</script>
