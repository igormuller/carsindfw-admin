<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title class="white--text">
                  Login form
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form @keydown.enter="sendLogin()">
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
                </form>
              </v-card-text>
              <v-card-actions>
                <span class="caption pl-4">
                  If you don't have login then
                  <router-link to="/register">
                    Register
                  </router-link>
                </span>
                <v-spacer />
                <v-btn color="primary" @click="sendLogin()" class="mb-3 mr-3">
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="d-flew justify-center">
          <span class="caption pl-4">
            If you haven't verified your email and forgot your token
            <router-link to="/new-token">
              Click Here
            </router-link>
          </span>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: { username: null, password: null }
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
          this.$toasted.global.defaultSuccess({ msg: "Login Success ..." });
          this.$http.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.access_token;
          localStorage.setItem("carsindfw_admin_logged", true);
          localStorage.setItem("carsindfw_admin_token", res.data.access_token);
          this.user = {};
          this.getUser(res.data.access_token);
          this.$router.push("/admin/dashboard");
        })
        .catch(() => {
          this.$toasted.global.defaultError({
            msg: "Login or Password incorrectly!"
          });
        });
    },
    getUser(token) {
      this.$http
        .get("/users/info", { headers: { Authorization: "Bearer " + token } })
        .then(res => (this.$store.state.user = res.data));
    }
  }
};
</script>
