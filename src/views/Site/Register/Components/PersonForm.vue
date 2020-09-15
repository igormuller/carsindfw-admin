<template>
  <v-card>
    <v-card-text class="px-10">
      <v-row>
        <v-col
          style="background-color: #00205B; color: white;"
          align="center"
          justify="center"
          class="py-8"
        >
          <h3>
            Join us! <br />
            By advertising with us, you will find a bigger possibility to <br />
            reach more and more potential buyers to your vehicle!
          </h3>
        </v-col>
      </v-row>
      <v-form>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="First Name"
              type="email"
              v-model="person.first_name"
              :error-messages="errors.first_name"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Last Name"
              type="email"
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
              type="email"
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
      person: {
        first_name: "",
        last_name: "",
        email: "",
        document: "",
        phone: "",
        zipcode: "",
        password: "",
        re_password: "",
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
    }
  }
};
</script>
