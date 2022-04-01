<template>
  <div>
    <v-subheader class="mb-n3">
      <strong> Enter below all the form fields. </strong>
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
      <strong> Enter below those of credit card data. </strong>
    </v-subheader>
    <v-divider></v-divider>
    <v-row class="mt-n3">
      <v-col cols="12" md="4">
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
      <v-col cols="12" md="4">
        <v-text-field
          label="Card Holder"
          v-model="person.card_name"
          :error-messages="errors.card_name"
        />
      </v-col>
      <v-col cols="6" md="2">
        <v-text-field
          label="Expiration Date"
          v-mask="'##/##'"
          v-model="person.card_expiration_date"
          :error-messages="errors.card_expiration_date"
        />
      </v-col>
      <v-col cols="6" md="2">
        <v-text-field
          label="CVV"
          v-mask="'###'"
          v-model="person.card_cvv"
          :error-messages="errors.card_cvv"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn text @click="$emit('changeStep', 2)" :disabled="registering">
        Change Plan
      </v-btn>
      <v-btn
        color="#00205b"
        class="white--text ml-2"
        @click="sendRegister()"
        :loading="registering"
      >
        Register
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
      this.person.plan_type_id = this.planType;
      this.$http
        .post("/new-company", this.person)
        .then(() => this.$emit("changeStep", 3))
        .catch(error => {
          this.registering = false;
          if (error.response.status !== 201) {
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
