<template>
  <div>
    <NewBrand :dialog="dialog" @closeDialog="changeCard"></NewBrand>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(method, key) in methods" :key="key">
                <td>{{ method.brand }}</td>
                <td>****{{ method.last4 }}</td>
                <td>{{ method.expiration }}</td>
                <td>
                  <v-chip color="success" small outlined v-if="method.default">
                    <v-icon x-small>fas fa-check</v-icon>
                  </v-chip>
                </td>
                <td>
                  <div v-if="!method.default">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon
                          small
                          v-on="on"
                          class="mr-1"
                          @click="defaultCard(method.id)"
                          :disabled="loadingMethods"
                        >
                          fas fa-check
                        </v-icon>
                      </template>
                      <span>Default</span>
                    </v-tooltip>
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-icon
                          small
                          v-on="on"
                          @click="deleteCard(method.id)"
                          :disabled="loadingMethods"
                        >
                          fas fa-trash
                        </v-icon>
                      </template>
                      <span>Remove</span>
                    </v-tooltip>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import NewBrand from "./Dialogs/NewBrand";

export default {
  name: "PaymentMethods",
  components: { NewBrand },
  data: () => ({
    dialog: false,
    methods: [],
    loadingMethods: true
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
      this.$http
        .put(`/default-payment-method`, { id: id })
        .then(() => this.loadingPaymentMethod())
        .catch(error => console.log(error.response));
    },
    deleteCard(id) {
      this.loadingMethods = true;
      this.$http
        .delete(`/delete-payment-method/${id}`)
        .then(() => this.loadingPaymentMethod())
        .catch(error => console.log(error.response));
    }
  },
  created() {
    this.$http.get(`/payment-method-detail`).then(res => {
      this.methods = res.data;
      this.loadingMethods = false;
    });
  }
};
</script>
