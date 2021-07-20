<template>
  <div>
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
        Enter below those of credit card data. Relaxes you have 30 days free.
      </strong>
    </v-subheader>
    <v-divider></v-divider>
    <v-row class="mt-n3">
      <v-col cols="12" md="4">
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
      <v-col cols="12" md="4">
        <v-text-field
          label="Card Holder"
          v-model="dealer.card_name"
          :error-messages="errors.card_name"
        />
      </v-col>
      <v-col cols="6" md="2">
        <v-text-field
          label="Expiration Date"
          v-mask="'##/##'"
          v-model="dealer.card_expiration_date"
          :error-messages="errors.card_expiration_date"
        />
      </v-col>
      <v-col cols="6" md="2">
        <v-text-field
          label="CVV"
          v-mask="'###'"
          v-model="dealer.card_cvv"
          :error-messages="errors.card_cvv"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn text @click="$emit('backStep')" :disabled="registering">
        Change Plan
      </v-btn>
      <v-btn
        color="#00205b"
        class="white--text ml-2"
        @click="sendRegister()"
        :loading="registering"
      >
        Register me
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["planType"],
  data() {
    return {
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
      this.dealer.plan_type_id = this.planType;
      this.$http
        .post("/new-company", this.dealer)
        .then(() => this.$emit("changeStep", 3))
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
