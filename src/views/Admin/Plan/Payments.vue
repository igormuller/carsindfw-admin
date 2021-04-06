<template>
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
</template>

<script>
export default {
  name: "Payments",
  data: () => ({
    intents: [],
    loadingIntents: true
  }),
  created() {
    this.$http.get(`/payment-intent-detail`).then(res => {
      this.intents = res.data;
      this.loadingIntents = false;
    });
  }
};
</script>
