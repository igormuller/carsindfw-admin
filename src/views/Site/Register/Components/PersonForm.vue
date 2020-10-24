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
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="First Name"
                      v-model="person.first_name"
                      :error-messages="errors.first_name"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Last Name"
                      v-model="person.last_name"
                      :error-messages="errors.last_name"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="E-mail"
                      type="email"
                      v-model="person.email"
                      :error-messages="errors.email"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Document"
                      v-model="person.document"
                      v-mask="'###-##-####'"
                      :error-messages="errors.document"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Phone"
                      v-model="person.phone"
                      v-mask="'###-###-####'"
                      :error-messages="errors.phone"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      label="Zip"
                      v-model="person.zipcode"
                      v-mask="'#####'"
                      :messages="zipcode_message"
                      @change="searchZipcode(person.zipcode)"
                      :error-messages="errors.zipcode"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Create Password"
                      type="password"
                      v-model="person.password"
                      :error-messages="errors.password"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      label="Repeat Password"
                      type="password"
                      v-model="person.re_password"
                      :error-messages="errors.re_password"
                    />
                  </v-col>
                </v-row>
                <v-row justify="end" class="mr-2">
                  <v-btn text @click="step = 1">Change Plan</v-btn>
                  <v-btn
                    color="#00205b"
                    class="white--text"
                    @click="sendRegister()"
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
      person: {
        first_name: "",
        last_name: "",
        email: "",
        document: "",
        phone: "",
        zipcode: "",
        password: "",
        re_password: "",
        plan_type_id: "",
        type: "person"
      },
      errors: {}
    };
  },
  methods: {
    sendRegister() {
      this.$http
        .post("/new-company", this.person)
        .then(() => this.$router.push("/login"))
        .catch(error => (this.errors = error.response.data.errors));
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
