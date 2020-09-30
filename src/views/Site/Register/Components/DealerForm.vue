<template>
  <v-card class="elevation-8 mt-3 mb-3">
    <v-card-text class="px-8">
      <v-row>
        <v-col cols="3">
          <v-img src="@/assets/network-people.png" contain></v-img>
        </v-col>
        <v-col
          cols="9"
          style="background-color: #00205B; color: white;"
          class="d-flex flex-row align-center justify-center"
          align="center"
        >
          <h3>
            Join us and became a dealer!<br />Request an account filling<br />
            below or send us an email to<br />tiago.carsindfw@gmail.com
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-stepper v-model="step">
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="d-flex flex-row align-center justify-center">
                  <h2 align="center" class="color-carsindfw">
                    We are pleased to have you as a CARSinDFW Dealer!<br />
                    Here you will find the best place to promote your store and
                    increase your sales.<br />
                    We have a prepared staff to make sure you are having the
                    best experience and using all the tolls<br />
                    we have to make your business grow and be viewed.
                  </h2>
                </div>
                <br />
                <v-row>
                  <v-col md="6" lg="3" align="center">
                    <v-card
                      @click="selectPlan(4)"
                      link
                      class="elevation-8 mx-12 d-flex flex-column align-center"
                      color="grey lighten-2"
                      height="200px"
                      width="200px"
                    >
                      <h3 class="mt-3 color-carsindfw">INVENTARY SIZE</h3>
                      <div class="mt-3 number-advertisement">0-20</div>
                      <div class="mt-10 price-advertisement">$99</div>
                      <div class="mt-10 price-per-car">$4,95/car</div>
                    </v-card>
                  </v-col>
                  <v-col md="6" lg="3" align="center">
                    <v-card
                      @click="selectPlan(5)"
                      link
                      class="elevation-8 mx-12 d-flex flex-column align-center"
                      color="grey lighten-2"
                      height="200px"
                      width="200px"
                    >
                      <h3 class="mt-3 color-carsindfw">INVENTARY SIZE</h3>
                      <div class="mt-3 number-advertisement">0-50</div>
                      <div class="mt-10 price-advertisement">$199</div>
                      <div class="mt-10 price-per-car">$3,98/car</div>
                    </v-card>
                  </v-col>
                  <v-col md="6" lg="3" align="center">
                    <v-card
                      @click="selectPlan(6)"
                      link
                      class="elevation-8 mx-12 d-flex flex-column align-center"
                      color="grey lighten-2"
                      height="200px"
                      width="200px"
                    >
                      <h3 class="mt-3 color-carsindfw">INVENTARY SIZE</h3>
                      <div class="mt-3 number-advertisement">0-100</div>
                      <div class="mt-10 price-advertisement">$299</div>
                      <div class="mt-10 price-per-car">$2,99/car</div>
                    </v-card>
                  </v-col>
                  <v-col md="6" lg="3" align="center">
                    <v-card
                      @click="selectPlan(7)"
                      link
                      class="elevation-8 mx-12 d-flex flex-column align-center"
                      color="grey lighten-2"
                      height="200px"
                      width="200px"
                    >
                      <h3 class="mt-3 color-carsindfw">INVENTARY SIZE</h3>
                      <div class="mt-3 number-advertisement">0-200</div>
                      <div class="mt-10 price-advertisement">$399</div>
                      <div class="mt-10 price-per-car">$1,99/car</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Dealership Name"
                      v-model="dealer.name_dealer"
                      :error-messages="errors.name_dealer"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Dealership E-mail"
                      type="email"
                      v-model="dealer.email_dealer"
                      :error-messages="errors.email_dealer"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Dealership Document"
                      v-model="dealer.document"
                      v-mask="'##-#######'"
                      :error-messages="errors.document"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Dealership Phone"
                      v-model="dealer.phone"
                      v-mask="'###-###-####'"
                      :error-messages="errors.phone"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Dealership Zip"
                      v-model="dealer.zipcode"
                      v-mask="'#####'"
                      :error-messages="errors.zipcode"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Your First Name"
                      v-model="dealer.first_name"
                      :error-messages="errors.first_name"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Your Last Name"
                      v-model="dealer.last_name"
                      :error-messages="errors.last_name"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Your E-mail"
                      type="email"
                      v-model="dealer.email"
                      :error-messages="errors.email"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Create Password"
                      type="password"
                      v-model="dealer.password"
                      :error-messages="errors.password"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Repeat Password"
                      type="password"
                      v-model="dealer.re_password"
                      :error-messages="errors.re_password"
                    />
                  </v-col>
                </v-row>

                <v-btn color="primary" @click="sendRegister()">Register</v-btn>
                <v-btn text @click="step = 1">Change Plan</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                Thank you for register
                <v-btn color="primary" to="/login">Make Login</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col class="d-flex flex-row justify-center">
          <div>
            <h2 class="color-carsindfw">
              Not a dealer, but interested in <br />
              advertising on carsindfw.com?
            </h2>
          </div>
          <div class="ml-10">
            <v-btn
              color="red"
              class="white--text"
              @click="$emit('changeType', 'person')"
            >
              Click Here!
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      dealer: {
        name: "",
        dealer_email: "",
        first_name: "",
        last_name: "",
        email: "",
        document: "",
        phone: "",
        zipcode: "",
        password: "",
        re_password: "",
        plan_type_id: "",
        type: "dealer"
      },
      errors: {}
    };
  },
  methods: {
    sendRegister() {
      this.$http
        .post("/new-company", this.dealer)
        .then(() => (this.step = 3))
        .catch(error => (this.errors = error.response.data.errors));
    },
    selectPlan(plan) {
      this.dealer.plan_type_id = plan;
      this.step = 2;
    }
  }
};
</script>

<style scoped>
.color-carsindfw {
  color: #00205b;
}
.number-advertisement {
  color: #00205b;
  font-weight: bold;
  font-size: 35px;
}
.price-advertisement {
  color: #c0323e;
  font-weight: bold;
  font-size: 55px;
}
.price-per-car {
  color: #c0323e;
  font-weight: bold;
  font-size: 13px;
}
</style>
