<template>
  <v-card>
    <v-card-text class="px-10">
      <v-row>
        <v-col class="pa-8 banner-top">
          <h2>
            Join us! <br />
            By advertising with us, you will find a bigger possibility to <br />
            reach more and more potential buyers to your vehicle!
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-stepper v-model="step">
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="d-flex flex-row align-center justify-center">
                  <h2 align="center" class="color-carsindfw">
                    We have this big oportunities for you!
                  </h2>
                </div>
                <br />
                <v-row>
                  <v-col cols="12" md="6" align="center">
                    <v-card
                      @click="selectPlan(2)"
                      link
                      class="elevation-8 mx-12 d-flex flex-column align-center justify-center"
                      height="200px"
                      width="200px"
                    >
                      <div class="days-person">30 days</div>
                      <div class="mt-5 days-person">$19,90</div>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" align="center">
                    <v-card
                      @click="selectPlan(3)"
                      link
                      class="elevation-8 mx-12 d-flex flex-column align-center justify-center"
                      height="200px"
                      width="200px"
                    >
                      <div class="days-person">60 days</div>
                      <div class="mt-5 days-person">$24,90</div>
                    </v-card>
                  </v-col>
                </v-row>
                <div class="mt-12 mb-5 d-flex flex-row justify-center">
                  <v-card class="elevation-8 pa-10" color="grey lighten-2">
                    <h2 align="center" class="color-carsindfw">
                      To advertise with us is verys simple. You just need an
                      account. Select one option above to start.
                    </h2>
                  </v-card>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-subheader class="mb-n3">
                  <strong>
                    Enter below all the form fields.
                  </strong>
                </v-subheader>
                <v-divider></v-divider>
                <v-row class="mt-n3">
                  <v-col cols="12" md="2">
                    <v-text-field
                      label="Zip"
                      v-model="person.zipcode"
                      v-mask="'#####'"
                      :messages="zipcode_message"
                      @change="searchZipcode(person.zipcode)"
                      :error-messages="errors.zipcode"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      label="User Name"
                      v-model="person.user_name"
                      :error-messages="errors.user_name"
                    />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field
                      label="User E-mail"
                      type="email"
                      v-model="person.user_email"
                      :error-messages="errors.user_email"
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      label="Create Password"
                      type="password"
                      v-model="person.password"
                      :error-messages="errors.password"
                    />
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-text-field
                      label="Repeat Password"
                      type="password"
                      v-model="person.re_password"
                      :error-messages="errors.re_password"
                    />
                  </v-col>
                </v-row>
                <v-subheader class="mb-n3">
                  <strong>
                    Enter below those of credit card data.
                  </strong>
                </v-subheader>
                <v-divider></v-divider>
                <v-row class="mt-n3">
                  <v-col cols="4">
                    <v-text-field
                      label="Card Number"
                      v-mask="'#### #### #### ####'"
                      v-model="person.card_number"
                      @keyup="checkCreditCardFlag(person.card_number)"
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
                      v-model="person.card_name"
                      :error-messages="errors.card_name"
                    />
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      label="Expiration Date"
                      v-mask="'##/##'"
                      v-model="person.card_expiration_date"
                      :error-messages="errors.card_expiration_date"
                    />
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      label="CVV"
                      v-mask="'###'"
                      v-model="person.card_cvv"
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
                    Register
                  </v-btn>
                </v-row>
              </v-stepper-content>

              <v-stepper-content step="3">
                Thank you for register
                <v-btn color="primary" to="/login">Make Login</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col class="d-flex flex-row justify-center" style="color:#00205B">
          <div>
            <h2>
              Are you a dealer interested in <br />
              advertising on carsindfw.com?
            </h2>
          </div>
          <div class="ml-10">
            <v-btn
              color="red"
              class="white--text"
              @click="$emit('changeType', 'dealer')"
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
      person: {
        user_name: "",
        user_email: "",
        zipcode: "",
        password: "",
        re_password: "",
        plan_type_id: "",
        type: "person",
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
        .post("/new-company", this.person)
        .then(() => this.$router.push("/login"))
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
      this.person.plan_type_id = plan;
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
.banner-top {
  background-color: #00205b;
  color: white;
}
.days-person {
  color: #c0323e;
  font-weight: bold;
  font-size: 35px;
}
</style>
