<template>
  <v-card class="elevation-8 my-5">
    <v-row>
      <v-col cols="3" class="hidden-sm-and-down">
        <v-img src="@/assets/site/network-people.png" contain></v-img>
      </v-col>
      <v-col cols="12" md="9" align="center">
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
        <v-stepper flat v-model="step">
          <v-stepper-items>
            <v-stepper-content step="1" style="color:#00205b">
              <v-col
                offset-md="2"
                style="background-color: #00205b"
                class="white--text"
              >
                <span class="display-1">SELL YOUR CAR WITH US!</span>
              </v-col>
              <div class="d-flex justify-center align-center flex-wrap mt-5">
                <div class="mx-8 my-5">
                  <div class="d-flex align-center">
                    <v-img
                      src="@/assets/site/logo.png"
                      max-height="20"
                      max-width="20"
                      class="mr-2"
                    ></v-img>
                    <div class="headline">Benefits for all categories</div>
                  </div>
                  <div class="d-flex align-center">
                    <v-img
                      src="@/assets/site/logo.png"
                      max-height="20"
                      max-width="20"
                      class="mr-2"
                    ></v-img>
                    <h3 class="headline">Exclusive page for dealers</h3>
                  </div>
                  <div class="d-flex align-center">
                    <v-img
                      src="@/assets/site/logo.png"
                      max-height="20"
                      max-width="20"
                      class="mr-2"
                    ></v-img>
                    <div>
                      <h3 class="headline">Advertisement avalable for</h3>
                      <h3 class="headline mt-n2">
                        dealers and private sellers
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="mx-8 my-5">
                  <v-img src="@/assets/site/image_01_page_sell.png"></v-img>
                </div>
              </div>
              <div class="d-flex justify-center align-center flex-wrap mt-5">
                <div class="mx-8">
                  <v-img src="@/assets/site/image_02_page_sell.png"></v-img>
                </div>
                <div class="mx-8">
                  <div class="d-flex align-center">
                    <v-img
                      src="@/assets/site/logo.png"
                      max-height="20"
                      max-width="20"
                      class="mr-2"
                    >
                    </v-img>
                    <div class="headline">Access for one user or more</div>
                  </div>
                  <div class="d-flex align-center">
                    <v-img
                      src="@/assets/site/logo.png"
                      max-height="20"
                      max-width="20"
                      class="mr-2"
                    >
                    </v-img>
                    <h3 class="headline">Exclusive focus on the DFW market</h3>
                  </div>
                </div>
              </div>
              <div class="text-center mt-8">
                <div class="headline">
                  <!-- eslint-disable-next-line -->
                  You can contact us! <span class="text-decoration-underline" style="cursor:pointer; color:#c0323e" @click="step=2">Click Here</span> for more information about our<br>
                  plans and more benefits!
                </div>
              </div>
            </v-stepper-content>
            <v-stepper-content step="2">
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
                      <p>For the dealer, very advertisements in one place.</p>
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
                    <v-avatar size="100" color="#00205b" class="my-2">
                      <div class="d-flex flex-column white--text">
                        <h3 class="text-decoration-line-through">19</h3>
                        <h1>Free</h1>
                      </div>
                    </v-avatar>
                    <div class="my-8">
                      <p>For you to sell your car.</p>
                    </div>
                    <v-btn
                      rounded
                      color="#BF0D3E"
                      dark
                      @click="selectPlan('person', 8)"
                    >
                      Registering
                    </v-btn>
                  </v-card-text>
                </v-card>
              </div>
              <div class="text-center">
                <v-btn text @click="step = 1">
                  <i class="fas fa-angle-left mr-2"></i>Back
                </v-btn>
              </div>
            </v-stepper-content>
            <v-stepper-content step="3">
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
            <v-stepper-content step="4">
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
      step: 1,
      type: null,
      plan: null
    };
  },
  methods: {
    selectPlan(type, plan) {
      this.step = 3;
      this.type = type;
      this.plan = plan;
    }
  }
};
</script>
