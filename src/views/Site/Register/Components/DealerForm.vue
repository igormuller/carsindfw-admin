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
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Dealership Name"
              type="text"
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
              type="text"
              v-model="dealer.document"
              v-mask="'##-#######'"
              :error-messages="errors.document"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Dealership Phone"
              type="email"
              v-model="dealer.phone"
              v-mask="'###-###-####'"
              :error-messages="errors.phone"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Dealership Zip"
              type="email"
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
              type="email"
              v-model="dealer.first_name"
              :error-messages="errors.first_name"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Your Last Name"
              type="email"
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
      </v-form>
      <v-row class="mt-n5">
        <v-col class="d-flex justify-end">
          <v-btn color="primary" @click="sendRegister()">Register</v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col class="d-flex flex-row justify-center" style="color:#00205B">
          <div>
            <h2>
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
        type: "dealer"
      },
      errors: {}
    };
  },
  methods: {
    sendRegister() {
      this.$http
        .post("/new-company", this.dealer)
        .then(() => this.$router.push("/login"))
        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>
