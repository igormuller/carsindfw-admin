<template>
  <v-card class="elevation-8 mt-5">
    <v-row>
      <v-col cols="3">
        <v-img src="@/assets/site/network-people.png" contain></v-img>
      </v-col>
      <v-col cols="9" align="center">
        <div
          style="background-color: #00205b; height:100%"
          class="d-flex align-center justify-center"
        >
          <h3 class="display-1 font-weight-black white--text">
            Join us and became a dealer!<br />Request an account filling below
          </h3>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-stepper v-model="step">
          <v-stepper-items>
            <v-stepper-content step="1">
              <div class="ma-2 d-flex justify-center flex-wrap">
                <v-card
                  elevation="8"
                  height="300"
                  width="200"
                  class="text-center ma-5"
                >
                  <v-card-text>
                    <div
                      class="body-1 text-uppercase grey--text font-weight-bold"
                    >
                      Dealer
                    </div>
                    <v-avatar size="100" color="#00205b" class="my-2">
                      <div class="d-flex flex-column white--text">
                        <h3 class="text-decoration-line-through">799</h3>
                        <h1>$399</h1>
                      </div>
                    </v-avatar>
                    <div class="my-2">
                      <p>For tha dealer, very advertisements in one place.</p>
                    </div>
                    <v-btn
                      rounded
                      color="#BF0D3E"
                      dark
                      @click="selectPlan('dealer', 7)"
                    >
                      Registering
                    </v-btn>
                  </v-card-text>
                </v-card>
                <v-card
                  elevation="8"
                  height="300"
                  width="200"
                  class="text-center ma-5"
                >
                  <v-card-text>
                    <div
                      class="body-1 text-uppercase grey--text font-weight-bold"
                    >
                      Person
                    </div>
                    <v-avatar size="100" color="#00205b" class="mt-2 mb-5">
                      <div class="d-flex flex-column white--text">
                        <h3 class="text-decoration-line-through">69</h3>
                        <h1>$19</h1>
                      </div>
                    </v-avatar>
                    <div class="my-4">
                      <p>For you to sell your car, during 60 days</p>
                    </div>
                    <v-btn
                      rounded
                      color="#BF0D3E"
                      dark
                      @click="selectPlan('person', 2)"
                    >
                      Registering
                    </v-btn>
                  </v-card-text>
                </v-card>
              </div>
            </v-stepper-content>
            <v-stepper-content step="2">
              <dealer-form
                v-if="type === 'dealer'"
                @changeStep="step = $event"
                :planType="plan"
              ></dealer-form>
              <person-form
                v-if="type === 'person'"
                @changeStep="step = $event"
                :planType="plan"
              ></person-form>
            </v-stepper-content>
            <v-stepper-content step="3">
              <div class="text-center ma-8" style="color:#00205b">
                <h1 class="mb-5">Thanks for registering</h1>
                <h3>
                  To complete your registration, you need to confirm your email.
                </h3>
                <h3>
                  We at CARSinDFW thank you for registering on our platform.
                </h3>
                <v-btn
                  text
                  to="/login"
                  color="#00205b"
                  class="mt-5 font-weight-bold"
                >
                  Access the Login screen
                </v-btn>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DealerForm from "./Components/DealerForm.vue";
import PersonForm from "./Components/PersonForm.vue";
export default {
  components: { DealerForm, PersonForm },
  data() {
    return {
      step: "1",
      type: null,
      plan: null
    };
  },
  methods: {
    selectPlan(type, plan) {
      this.step = 2;
      this.type = type;
      this.plan = plan;
    }
  }
};
</script>
