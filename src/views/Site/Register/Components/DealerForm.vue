<template>
  <v-card class="elevation-8 mt-3 mb-3">
    <v-card-text class="px-8">
      <v-row>
        <v-col cols="3">
          <v-img src="@/assets/site/network-people.png" contain></v-img>
        </v-col>
        <v-col
          cols="9"
          style="background-color: #00205B; color: white;"
          class="d-flex flex-row align-center justify-center"
          align="center"
        >
          <h3>
            Join us and became a dealer!<br />Request an account filling<br />
            below or send us an email to<br />contato@carsindfw.com
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
                      <h3 class="mt-3 color-carsindfw">INVENTORY SIZE</h3>
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
                      <h3 class="mt-3 color-carsindfw">INVENTORY SIZE</h3>
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
                      <h3 class="mt-3 color-carsindfw">INVENTORY SIZE</h3>
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
                      <h3 class="mt-3 color-carsindfw">INVENTORY SIZE</h3>
                      <div class="mt-3 number-advertisement">0-200</div>
                      <div class="mt-10 price-advertisement">$399</div>
                      <div class="mt-10 price-per-car">$1,99/car</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-subheader class="mb-n3">
                  <strong>Enter below all the form fields.</strong>
                </v-subheader>
                <v-divider></v-divider>
                <v-row class="mt-n3">
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Dealership Name"
                      v-model="dealer.name"
                      :error-messages="errors.name"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Dealership Phone"
                      v-model="dealer.phone"
                      v-mask="'(###) ###-####'"
                      :error-messages="errors.phone"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Dealership Zip"
                      v-model="dealer.zipcode"
                      v-mask="'#####'"
                      :error-messages="errors.zipcode"
                      :messages="zipcode_message"
                      @change="searchZipcode(dealer.zipcode)"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="User Name"
                      v-model="dealer.user_name"
                      :error-messages="errors.user_name"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="User E-mail"
                      type="email"
                      v-model="dealer.user_email"
                      :error-messages="errors.user_email"
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      label="Create Password"
                      type="password"
                      v-model="dealer.password"
                      :error-messages="errors.password"
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      label="Repeat Password"
                      type="password"
                      v-model="dealer.re_password"
                      :error-messages="errors.re_password"
                    />
                  </v-col>
                </v-row>
                <v-subheader class="mb-n3">
                  <strong>
                    Enter below those of credit card data. Relaxes you have 30
                    days free.
                  </strong>
                </v-subheader>
                <v-divider></v-divider>
                <v-row class="mt-n3">
                  <v-col cols="4">
                    <v-text-field
                      label="Card Number"
                      v-mask="'#### #### #### ####'"
                      v-model="dealer.card_number"
                      @keyup="checkCreditCardFlag(dealer.card_number)"
                      :error-messages="errors.card_number"
                    >
                      <v-icon slot="append" v-if="showCreditCardFlag">
                        {{ flags[creditCardFlag] }}
                      </v-icon>
                    </v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      label="Card Holder"
                      v-model="dealer.card_name"
                      :error-messages="errors.card_name"
                    />
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      label="Expiration Date"
                      v-mask="'##/##'"
                      v-model="dealer.card_expiration_date"
                      :error-messages="errors.card_expiration_date"
                    />
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      label="CVV"
                      v-mask="'###'"
                      v-model="dealer.card_cvv"
                      :error-messages="errors.card_cvv"
                    />
                  </v-col>
                </v-row>
                <v-row justify="end" class="mr-2">
                  <v-btn text @click="step = 1" :disabled="registering">Change Plan</v-btn>
                  <v-btn
                    color="#00205b"
                    class="white--text"
                    @click="sendRegister()"
                    :loading="registering"
                  >
                    Register me
                  </v-btn>
                </v-row>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  elevation="5"
                  class="text-center white--text mx-5 mt-5 mb-10 pa-10"
                  color="#00205B"
                >
                  <h1>We forward the verification link to email @.</h1>
                  <br />
                  <h1>
                    After confirmation of the email, access to the system will
                    be released.
                  </h1>
                </v-card>
                <v-row justify="end" class="mr-2">
                  <v-btn color="#00205b" class="white--text" to="/login">
                    Make Login
                  </v-btn>
                </v-row>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>

      <v-row class="mt-12">
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
      registering: false,
      dealer: {
        name: "",
        user_name: "",
        user_email: "",
        phone: "",
        zipcode: "",
        password: "",
        re_password: "",
        plan_type_id: "",
        type: "dealer",
        card_number: "",
        card_name: "",
        card_expiration_date: "",
        card_cvv: ""
      },
      showCreditCardFlag: false,
      creditCardFlag: null,
      flags: {
        37: "fab fa-cc-amex",
        38: "fab fa-cc-diners-club",
        4: "fab fa-cc-visa",
        5: "fab fa-cc-mastercard",
        6: "fab fa-cc-discover"
      },
      zipcode_message: "",
      errors: {}
    };
  },
  methods: {
    sendRegister() {
      this.registering = true;
      this.$http
        .post("/new-company", this.dealer)
        .then(() => (this.step = 3))
        .catch(error => {
          this.registering = false;
          if (error.response.status === 402) {
            this.$toasted.global.defaultError({
              msg: error.response.data.message
            });
            return false;
          }
          this.errors = error.response.data.errors;
        });
    },
    selectPlan(plan) {
      this.dealer.plan_type_id = plan;
      this.step = 2;
    },
    searchZipcode(zipcode) {
      if (zipcode.length === 5) {
        this.$http
          .get(`/search-zipcode/${zipcode}`)
          .then(res => this.zipCodeFind(res.data))
          .catch(error => (this.errors = error.response.data.errors));
      }
    },
    zipCodeFind(data) {
      this.errors.zipcode = "";
      this.zipcode_message = `${data.city.name}/${data.city.state.initials}`;
    },
    checkCreditCardFlag(number) {
      if (number.length > 3) {
        let firstNumber = number.substr(0, 1);
        this.showCreditCardFlag = true;
        this.creditCardFlag = firstNumber;
        if (firstNumber === "3") {
          this.creditCardFlag = number.substr(0, 2);
        }
      }

      if (number.length <= 3) {
        this.showCreditCardFlag = false;
      }
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
