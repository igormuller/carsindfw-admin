<template>
  <v-app id="inspire" style="background-color:#F2F2F2">
    <v-app-bar app absolute height="80" color="#00205b">
      <v-container>
        <div class="d-flex align-center">
          <v-img
            style="cursor:pointer"
            src="@/assets/site/full_logo.png"
            max-width="360"
            min-width="10"
            min-height="10"
            @click="pageStart()"
          />
          <v-spacer></v-spacer>
          <h2 class="white--text">Broker: {{ broker_name }}</h2>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card :loading="loading" :disabled="loading" v-if="hasBroker">
          <v-card-title>
            Create
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="2">
                <v-combobox
                  v-model="register.type"
                  :items="['Dealer', 'Person']"
                ></v-combobox>
              </v-col>
              <v-col cols="12" md="4" v-if="register.type === 'Dealer'">
                <v-text-field
                  label="Dealership Name"
                  v-model="register.dealer_name"
                  :error-messages="errors.name"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  label="Dealership Zip"
                  v-model="register.zipcode"
                  v-mask="'#####'"
                  :error-messages="errors.zipcode"
                  :messages="zipcode_message"
                  @change="searchZipcode(register.zipcode)"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="User Name"
                  v-model="register.user_name"
                  :error-messages="errors.user_name"
                />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  label="User E-mail"
                  type="email"
                  v-model="register.user_email"
                  :error-messages="errors.user_email"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  label="Create Password"
                  type="password"
                  v-model="register.password"
                  :error-messages="errors.password"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  label="Repeat Password"
                  type="password"
                  v-model="register.re_password"
                  :error-messages="errors.re_password"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <v-menu
                  v-model="datePiker"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Free End Period"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="datePiker = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card v-else height="150" class="d-flex align-center justify-center">
          <h1>
            Broker Not Searched
          </h1>
        </v-card>
      </v-container>
    </v-main>
    <footer>Footer</footer>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dealer: true,
      loading: true,
      broker_name: "",
      hasBroker: true,
      register: {
        name: "",
        user_name: "",
        user_email: "",
        phone: "",
        zipcode: "",
        password: "",
        re_password: "",
        plan_type_id: "",
        type: "Dealer",
        card_number: "",
        card_name: "",
        card_expiration_date: "",
        card_cvv: ""
      },
      zipcode_message: "",
      errors: {},
      date: "",
      datePiker: false
    };
  },
  methods: {
    searchZipcode(zipcode) {
      this.zipcode_message = "";
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
    pageStart() {
      this.$router.push("/");
    }
  },
  created() {
    let baseURL = process.env.VUE_APP_BASE_URL;
    axios
      .get(`${baseURL}/api/broker/detail`, {
        headers: { "broker-key": this.$route.query.key }
      })
      .then(resp => {
        this.loading = false;
        this.broker_name = resp.data.name;
      })
      .catch(() => (this.hasBroker = false));
    let date = new Date();
    date = date.setDate(date.getDate() + 30);
    this.date = new Date(date).toISOString().substr(0, 10);
  }
};
</script>
