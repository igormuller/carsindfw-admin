<template>
  <div>
    <new-plans
      :dialog="dialog"
      @closeDialog="dialog = false"
      @changeDialog="changePlan"
    ></new-plans>
    <v-card elevation="3" :loading="loadingPlan">
      <v-card-title>
        Plan
        <v-spacer></v-spacer>
        <div v-if="!loadingPlan">
          <!-- <v-btn
            outlined
            x-small
            color="indigo"
            v-if="checkChangeSubscription"
            @click="dialog = true"
          >
            Change
          </v-btn> -->
          <v-btn
            outlined
            x-small
            color="red"
            v-if="checkCancelSubscription"
            @click="cancelSubscription()"
          >
            Cancel
          </v-btn>
          <v-btn
            outlined
            x-small
            color="success"
            v-if="checkNewSubscription"
            @click="dialog = true"
          >
            New Subscription
          </v-btn>
          <v-btn
            outlined
            x-small
            color="success"
            v-if="checkNewPlan"
            @click="dialog = true"
          >
            New Plan
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
                <th>Validate</th>
              </tr>
            </thead>
            <tbody v-if="!loadingPlan">
              <tr>
                <td>{{ plan.plan_type.description }}</td>
                <td>{{ plan.status_front }}</td>
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
  </div>
</template>

<script>
import NewPlans from "./Dialogs/NewPlans.vue";
export default {
  components: { NewPlans },
  name: "Plan",
  props: {
    plan: Object,
    loadingPlan: Boolean
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    changePlan() {
      this.dialog = false;
      this.$emit("loadingPlan");
    },
    cancelSubscription() {
      this.$swal({
        text: `Confirm that you cancel subscription?`,
        icon: "warning",
        showCancelButton: true
      }).then(data => {
        if (data.value) {
          this.loadingPlan = true;
          this.$http
            .get(`/cancel-subscription`)
            .then(() => {
              this.$toasted.global.defaultSuccess({
                msg: "Subscription canceled!"
              });
              this.$emit("loadingPlan");
            })
            .catch(error => {
              this.$toasted.global.defaultError({ msg: error.response.data });
            });
        }
      });
    }
  },
  computed: {
    checkCancelSubscription() {
      return (
        this.plan.plan_type.company_type === "dealer" &&
        this.plan.status !== "canceled"
      );
    },
    checkChangeSubscription() {
      return (
        this.plan.plan_type.company_type === "dealer" &&
        this.plan.status !== "canceled"
      );
    },
    checkNewSubscription() {
      return (
        this.plan.plan_type.company_type === "dealer" &&
        this.plan.status === "canceled"
      );
    },
    checkNewPlan() {
      return this.plan.plan_type.company_type === "person";
    }
  }
};
</script>
