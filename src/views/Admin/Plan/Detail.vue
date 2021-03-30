<template>
  <v-row>
    <v-col cols="12" md="5">
      <v-card elevation="3" :loading="loadingPlan">
        <v-card-title>Plan</v-card-title>
        <v-card-text v-if="!loadingPlan">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Validate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ plan.plan_type.description }}</td>
                  <td>{{ plan.status }}</td>
                  <td v-if="plan.last_plan">
                    {{ plan.last_plan.finished_date }}
                  </td>
                  <td v-else class="text-center">-</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>

      <PaymentMethodNew
        :dialog="dialog"
        @closeDialog="changeCard"
      ></PaymentMethodNew>
      <v-card elevation="3" class="mt-5" :loading="loadingMethods">
        <v-card-title>
          Payment Methods
          <v-spacer />
          <v-btn outlined x-small color="indigo" @click="dialog = true">
            New Brand
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Last Number</th>
                  <th>Validate</th>
                  <th>Default</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(method, key) in methods" :key="key">
                  <td>{{ method.brand }}</td>
                  <td>****{{ method.last4 }}</td>
                  <td>{{ method.expiration }}</td>
                  <td>
                    <v-chip color="success" small outlined v-if="method.default">
                      <v-icon x-small>
                          fas fa-check
                        </v-icon>
                    </v-chip>
                  </td>
                  <td v-if="!method.default">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon small v-on="on" class="mr-1" @click="defaultCard(method.id)" :disabled="loadingMethods">
                          fas fa-check
                        </v-icon>
                      </template>
                      <span>Default</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon small v-on="on" @click="deleteCard(method.id)" :disabled="loadingMethods">
                          fas fa-trash
                        </v-icon>
                      </template>
                      <span>Remove</span>
                    </v-tooltip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="7">
      <v-card elevation="3" :loading="loadingIntents">
        <v-card-title>Payments</v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(intent, key) in intents" :key="key">
                  <td>{{ intent.created }}</td>
                  <td>{{ intent.description }}</td>
                  <td>{{ intent.amount_front }}</td>
                  <td>
                    <v-chip
                      color="success"
                      small
                      outlined
                      v-if="intent.status === 'succeeded'"
                    >
                      Paid
                    </v-chip>
                    <v-chip color="red" small outlined v-else>
                      Error
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PaymentMethodNew from "./Dialogs/PaymentMethods";

export default {
  components: { PaymentMethodNew },
  data: () => ({
    dialog: false,
    plan: {},
    intents: [],
    methods: [],
    loadingPlan: true,
    loadingMethods: true,
    loadingIntents: true
  }),
  methods: {
    changeCard() {
      this.loadingMethods = true;
      this.dialog = false;
      this.loadingPaymentMethod();
    },
    loadingPaymentMethod() {
      this.$http.get(`/payment-method-detail`).then(res => {
        this.methods = res.data;
        this.loadingMethods = false;
      });
    },
    defaultCard(id) {
      this.loadingMethods = true;
      this.$http.put(`/default-payment-method`, {id: id}).then(() => this.loadingPaymentMethod()).catch(error => console.log(error.response))
    },
    deleteCard(id) {
      this.loadingMethods = true;
      this.$http.delete(`/delete-payment-method/${id}`).then(() => this.loadingPaymentMethod()).catch(error => console.log(error.response))
    }
  },
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
  }
};
</script>
