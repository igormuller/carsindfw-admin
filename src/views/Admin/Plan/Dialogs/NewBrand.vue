<template>
  <v-dialog v-model="dialog" max-width="800px" @click:outside="closeDialog()">
    <v-card :loading="saving">
      <v-card-title>
        <span class="headline">New Brand</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Card Number"
                v-mask="'#### #### #### ####'"
                v-model="card.card_number"
                @keyup="checkCreditCardFlag(card.card_number)"
                :error-messages="errors.card_number"
              >
                <v-icon slot="append" v-if="showCreditCardFlag">
                  {{ flags[creditCardFlag] }}
                </v-icon>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                label="Card Holder"
                v-model="card.card_name"
                :error-messages="errors.card_name"
              />
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                label="Expiration Date"
                v-mask="'##/##'"
                v-model="card.card_expiration_date"
                :error-messages="errors.card_expiration_date"
              />
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field
                label="CVV"
                v-mask="'###'"
                v-model="card.card_cvv"
                :error-messages="errors.card_cvv"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()" :disabled="saving">Close</v-btn>
        <v-btn color="blue darken-1" text @click="saveCard()" :disabled="saving">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NewBrand",
  props: {
    dialog: Boolean
  },
  data: () => ({
    card: {
      card_number: "",
      card_name: "",
      card_expiration_date: "",
      card_cvv: ""
    },
    saving: false,
    showCreditCardFlag: false,
    creditCardFlag: null,
    flags: {
      37: "fab fa-cc-amex",
      38: "fab fa-cc-diners-club",
      4: "fab fa-cc-visa",
      5: "fab fa-cc-mastercard",
      6: "fab fa-cc-discover"
    },
    errors: {}
  }),
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },
    clearCard() {
      this.card = {
        card_number: "",
        card_name: "",
        card_expiration_date: "",
        card_cvv: ""
      };
    },
    saveCard() {
      this.saving = true;
      this.errors = {},
      this.$http
        .post('/new-payment-method', this.card)
        .then(() => {
          this.saving = false;
          this.clearCard();
          this.closeDialog();
        })
        .catch(error => {
          this.saving = false;
          if (error.response.status === 402) {
            this.$toasted.global.defaultError({
              msg: error.response.data.message
            });
            return false;
          }
          this.errors = error.response.data.errors;
        });
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
