<template>
  <v-dialog v-model="dialog" max-width="600px" @click:outside="closeDialog()">
    <v-card :loading="saving">
      <v-card-title>
        <span class="headline">New Plan</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="5">
              <v-select
                :items="plans"
                item-text="description"
                item-value="id"
                :hint="`$ ${hintPlan ? hintPlan.hint : ''}`"
                persistent-hint
                v-model="planSelect"
                label="Plan"
              ></v-select>
            </v-col>
            <v-col cols="12" md="7" class="text-center">
              <h3 style="color: #1d2671;">
                Description of plan:
                {{ hintPlan ? hintPlan.description : null }}
              </h3>
              <h4 style="color: #c33764;">
                The chosen plan will be charged to the card informed as standard
              </h4>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="closeDialog()"
          :disabled="saving"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="contractPlan()"
          :disabled="saving"
        >
          Contract
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NewPlans",
  props: {
    dialog: Boolean
  },
  data: () => ({
    saving: false,
    plans: [],
    planSelect: null,
    errors: {}
  }),
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },
    contractPlan() {
      this.saving = true;
      let user = this.$store.state.user;
      let url =
        user.company_type.type === "person"
          ? "contract-new-plan"
          : "new-subscription";
      this.$http
        .post(`/${url}`, { plan: this.planSelect })
        .then(() => {
          this.saving = false;
          this.$emit("changeDialog");
        })
        .catch(error => {
          this.saving = false;
          this.$toasted.global.defaultError({
            msg: error.response.data.message
          });
          return false;
        });
    }
  },
  computed: {
    hintPlan() {
      return this.plans.filter(item => item.id === this.planSelect)[0];
    }
  },
  created() {
    let user = this.$store.state.user;
    if (user.company_type.type === "person") {
      this.plans = [{ id: 3, description: "60 days", hint: "19" }];
    } else {
      this.plans = [
        { id: 7, description: "0 to 200 advertisements", hint: "399" }
      ];
    }
    // this.$http.get("/list-plan-types").then(res => {
    //   this.plans = res.data;
    //   let user = this.$store.state.user;
    //   this.planSelect = user.company.plan_type_id;
    //   this.plans = this.plans.filter(
    //     item => item.company_type === user.company_type.type
    //   );
    // });
  }
};
</script>
