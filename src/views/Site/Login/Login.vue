<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="user.username"
                  />
                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="user.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <span class="caption pl-4">
                  If you don't have login then
                  <router-link to="/register">
                    Register
                  </router-link>
                </span>
                <v-spacer />
                <v-btn color="primary" @click="sendLogin()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: { username: null, password: null },
      message: ""
    };
  },
  methods: {
    sendLogin() {
      let baseURL = process.env.VUE_APP_BASE_URL;
      this.user.grant_type = process.env.VUE_APP_GRANT_TYPE;
      this.user.client_id = process.env.VUE_APP_CLIENT_ID;
      this.user.client_secret = process.env.VUE_APP_CLIENT_SECRET;
      axios
        .post(baseURL + "/oauth/token", this.user)
        .then(res => {
          this.$http.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.access_token;
          localStorage.setItem("logged", true);
          localStorage.setItem("carsindfw_key", res.data.access_token);
          this.user = {};
          this.message = "";
          this.getUser(res.data.access_token);
          this.$router.push("/admin/dashboard");
        })
        .catch(() => {
          this.message = "Login or Password incorrectly!";
        });
    },
    getUser(token) {
      this.$http
        .get("/users/info", { headers: { Authorization: "Bearer " + token } })
        .then(res => (this.$store.user = res.data));
    }
  }
};
</script>
